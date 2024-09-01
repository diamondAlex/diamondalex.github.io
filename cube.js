let vertexShaderText = `
precision mediump float;

attribute vec3 vertPosition;
attribute vec3 vertColor;
varying vec3 fragColor;
uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;

void main()
{
    fragColor = vertColor;
    gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);    
}
`
let fragmentShaderText = `
precision mediump float;

varying vec3 fragColor;

void main()
{
    gl_FragColor = vec4(fragColor,1.0);    
}
`
function demo(){
    let div = document.getElementById("container")
    let canvas = document.createElement("canvas")
    div.appendChild(canvas)
    let gl = canvas.getContext("experimental-webgl")

    let w = 400
    let h = 400
    canvas.width = w 
    canvas.height = h

    gl.viewport(0,0, w,h)
    gl.clearColor(0.75,0.86,0.8,1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.enable(gl.DEPTH_TEST)
    gl.enable(gl.CULL_FACE)
    gl.frontFace(gl.CCW)
    gl.cullFace(gl.BACK)

    let vertexShader = gl.createShader(gl.VERTEX_SHADER)
    let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

    gl.shaderSource(vertexShader, vertexShaderText)
    gl.shaderSource(fragmentShader, fragmentShaderText)

    gl.compileShader(vertexShader)
    gl.compileShader(fragmentShader)
    if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)){
        console.error("ERROR compiling shader",gl.getShaderInfoLog(vertexShader))
        return
    }

    let program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
        console.error("ERROR linking program",gl.getProgramInfoLog(program))
        return
    }
    gl.validateProgram(program)

    var boxVertices = 
        [ // X, Y, Z           R, G, B
            // Top
            -1.0, 1.0, -1.0,   0.5, 0.5, 0.5,
            -1.0, 1.0, 1.0,    0.5, 0.5, 0.5,
            1.0, 1.0, 1.0,     0.5, 0.5, 0.5,
            1.0, 1.0, -1.0,    0.5, 0.5, 0.5,

            // Left
            -1.0, 1.0, 1.0,    0.75, 0.25, 0.5,
            -1.0, -1.0, 1.0,   0.75, 0.25, 0.5,
            -1.0, -1.0, -1.0,  0.75, 0.25, 0.5,
            -1.0, 1.0, -1.0,   0.75, 0.25, 0.5,

            // Right
            1.0, 1.0, 1.0,    0.25, 0.25, 0.75,
            1.0, -1.0, 1.0,   0.25, 0.25, 0.75,
            1.0, -1.0, -1.0,  0.25, 0.25, 0.75,
            1.0, 1.0, -1.0,   0.25, 0.25, 0.75,

            // Front
            1.0, 1.0, 1.0,    1.0, 0.0, 0.15,
            1.0, -1.0, 1.0,    1.0, 0.0, 0.15,
            -1.0, -1.0, 1.0,    1.0, 0.0, 0.15,
            -1.0, 1.0, 1.0,    1.0, 0.0, 0.15,

            // Back
            1.0, 1.0, -1.0,    0.0, 1.0, 0.15,
            1.0, -1.0, -1.0,    0.0, 1.0, 0.15,
            -1.0, -1.0, -1.0,    0.0, 1.0, 0.15,
            -1.0, 1.0, -1.0,    0.0, 1.0, 0.15,

            // Bottom
            -1.0, -1.0, -1.0,   0.5, 0.5, 1.0,
            -1.0, -1.0, 1.0,    0.5, 0.5, 1.0,
            1.0, -1.0, 1.0,     0.5, 0.5, 1.0,
            1.0, -1.0, -1.0,    0.5, 0.5, 1.0,
        ];

    var boxIndices =
        [
            // Top
            0, 1, 2,
            0, 2, 3,

            // Left
            5, 4, 6,
            6, 4, 7,

            // Right
            8, 9, 10,
            8, 10, 11,

            // Front
            13, 12, 14,
            15, 14, 12,

            // Back
            16, 17, 18,
            16, 18, 19,

            // Bottom
            21, 20, 22,
            22, 20, 23
        ];

    let boxVertexBuff = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER,boxVertexBuff) 
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices), gl.STATIC_DRAW)

    let boxIndexBuff = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBuff)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW)

    let positionArrLoc = gl.getAttribLocation(program, 'vertPosition')
    let colorArrLoc = gl.getAttribLocation(program, 'vertColor')
    gl.vertexAttribPointer(
        positionArrLoc,
        3,
        gl.FLOAT,
        gl.FALSE,
        6* Float32Array.BYTES_PER_ELEMENT,
        0
    )
    gl.enableVertexAttribArray(positionArrLoc)

    gl.vertexAttribPointer(
        colorArrLoc,
        3,
        gl.FLOAT,
        gl.FALSE,
        6* Float32Array.BYTES_PER_ELEMENT,
        3* Float32Array.BYTES_PER_ELEMENT
    )
    gl.enableVertexAttribArray(colorArrLoc)

    gl.useProgram(program)

    var matWorldUniformLocation = gl.getUniformLocation(program,'mWorld')
    var matViewUniformLocation = gl.getUniformLocation(program,'mView')
    var matProjUniformLocation = gl.getUniformLocation(program,'mProj')

    let worldMatrix = new Float32Array(16)
    let viewMatrix = new Float32Array(16)
    let projMatrix = new Float32Array(16)
    mat4.identity(worldMatrix)
    mat4.lookAt(viewMatrix,[0,0,-5],[0,0,0],[0,1,0])
    mat4.perspective(projMatrix,toRadian(45), canvas.width/canvas.height,0.1,1000)

    gl.uniformMatrix4fv(matWorldUniformLocation,gl.FALSE, worldMatrix)
    gl.uniformMatrix4fv(matViewUniformLocation,gl.FALSE, viewMatrix)
    gl.uniformMatrix4fv(matProjUniformLocation,gl.FALSE, projMatrix)

    let xrotationMatrix = new Float32Array(16)
    let yrotationMatrix = new Float32Array(16)

    var identityMatrix = new Float32Array(16)
    mat4.identity(identityMatrix)
    var angle = 0
    var loop = () =>{
        angle = performance.now()/1000/6*2*Math.PI
        mat4.rotate(yrotationMatrix, identityMatrix, angle, [0,1,0])
        mat4.rotate(xrotationMatrix, identityMatrix, angle/4, [1,0,0])
        mat4.mul(worldMatrix,xrotationMatrix,yrotationMatrix)
        gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix)

        gl.clearColor(0.75,0.85,0.8,1.0)
        gl.clear(gl.DEPTH_BUFFER_BIT)

        gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT,0)
        requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)


}

demo()
