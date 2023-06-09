#version 300 es

precision mediump float;

/* Lecture 21
 * CSCI 4611, Spring 2023, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

// The shader will be identical to the unlit shader in GopherGfx.

// If the material does not include a texture, then useTexture will be set to 0.
// Otherwise, it will be set to 1, and the image will be passed to the shader.
uniform int useTexture;
uniform sampler2D textureImage;

// The inputs to the fragment shader must match the outputs from the vertex shader.
// Because each pixel lies inside a triangle defined by three vertices, these inputs
// have already been interpolated (blended) by the rasterizer.
in vec4 vertColor;
in vec2 uv;

// A fragment shader can only have one output, which is the color of the pixel.
out vec4 fragColor;

void main()
{
    fragColor = vertColor;

    // If the material includes a texture image
    if(useTexture != 0)
    {
        fragColor *= texture(textureImage, uv);
    }
}