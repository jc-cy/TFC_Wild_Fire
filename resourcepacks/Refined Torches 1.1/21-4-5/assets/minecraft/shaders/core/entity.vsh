#version 150

#moj_import <minecraft:light.glsl>
#moj_import <minecraft:fog.glsl>

in vec3 Position;
in vec4 Color;
in vec2 UV0;
in ivec2 UV1;
in ivec2 UV2;
in vec3 Normal;

uniform sampler2D Sampler1;
uniform sampler2D Sampler2;
uniform mat4 ModelViewMat;
uniform mat4 ProjMat;
uniform mat4 TextureMat;
uniform int FogShape;
uniform vec3 Light0_Direction;
uniform vec3 Light1_Direction;

out float vDist;
out vec4 vCol;
out vec4 vLmap;
out vec4 vOver;
out vec2 vTex0;

// patoviskiz was here
void main() {
    gl_Position = ProjMat * ModelViewMat * vec4(Position, 1.0);
    vDist = fog_distance(Position, FogShape);

    #ifdef NO_CARDINAL_LIGHTING
        vCol = Color;
    #else
        vCol = minecraft_mix_light(Light0_Direction, Light1_Direction, Normal, Color);
    #endif

    vLmap = texelFetch(Sampler2, UV2 / 16, 0);
    vOver = texelFetch(Sampler1, UV1, 0);
    vTex0 = UV0;

    #ifdef APPLY_TEXTURE_MATRIX
        vTex0 = (TextureMat * vec4(UV0, 0.0, 1.0)).xy;
    #endif
}