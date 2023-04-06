#version 300 es

precision mediump float;

/* Lecture 21
 * CSCI 4611, Spring 2023, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

// The shader will be identical to the unlit shader in GopherGfx.

// The uniforms are variables passed in to the shader each frame by the CPU program.
// These are the four matrices needed to convert between coordinate spaces.
// The modelView matrix is a pre-computed combination of the model and view matrices.
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

// The inputs are the data for this vertex in a GPU memory buffer.
in vec3 position;

void main()
{
    // A vertex shader must assign a value to gl_Position.
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
}