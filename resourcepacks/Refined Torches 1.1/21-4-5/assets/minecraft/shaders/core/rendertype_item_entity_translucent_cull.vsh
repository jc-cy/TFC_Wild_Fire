#version 150

#moj_import <minecraft:light.glsl>
#moj_import <minecraft:fog.glsl>

in vec3 Position;
in vec4 Color;
in vec2 UV0;
in vec2 UV1;
in ivec2 UV2;
in vec3 Normal;

uniform sampler2D Sampler2;
uniform mat4 ModelViewMat;
uniform mat4 ProjMat;
uniform int FogShape;
uniform vec3 Light0_Direction;
uniform vec3 Light1_Direction;

out float vDist;
out vec4 vCol;
out vec2 vTex0;
out vec2 vTex1;
out vec2 vTex2;

// patoviskiz was here
void main() {
    gl_Position = ProjMat * ModelViewMat * vec4(Position, 1.0);
    vDist = fog_distance(Position, FogShape);
    vCol = minecraft_mix_light(Light0_Direction, Light1_Direction, Normal, Color) * texelFetch(Sampler2, UV2 / 16, 0);
    vTex0 = UV0;
    vTex1 = UV1;
    vTex2 = vec2(UV2);
}