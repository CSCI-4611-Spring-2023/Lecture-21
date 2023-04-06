#version 300 es

precision mediump float;

/* Lecture 21
 * CSCI 4611, Spring 2023, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

// The shader will be identical to the unlit shader in GopherGfx.

// The uniforms are variables passed in to the shader each frame by the CPU program.
uniform vec4 materialColor;

// A fragment shader can only have one output, which is the color of the pixel.
out vec4 fragColor;

void main()
{
    fragColor = materialColor;
}