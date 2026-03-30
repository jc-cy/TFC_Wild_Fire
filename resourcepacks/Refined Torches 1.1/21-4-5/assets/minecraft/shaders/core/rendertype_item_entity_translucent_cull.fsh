#version 150

#moj_import <minecraft:fog.glsl>

uniform sampler2D Sampler0;
uniform vec4 ColorModulator;
uniform float FogStart;
uniform float FogEnd;
uniform vec4 FogColor;

in float vDist;
in vec4 vCol;
in vec2 vTex0;
in vec2 vTex1;
in vec2 vTex2;

out vec4 fragColor;

// patoviskiz was here
void main() {
    vec4 t = texture(Sampler0, vTex0);
    
    #ifdef ALPHA_CUTOUT
        if (t.a < ALPHA_CUTOUT) discard;
    #endif

    vec4 lit = t * vCol * ColorModulator;
    if (lit.a < 0.1) discard;

    int a = int(round(lit.a * 255.0));

    if (a >= 250 && a <= 254) {
        float m = (a == 251) ? 0.75 : (a == 250 ? 0.5 : 1.0);
        vec4 res = t * ColorModulator;
        res.rgb *= m;
        res.a = lit.a;
        fragColor = res;
        return;
    }

    fragColor = linear_fog(lit, vDist, FogStart, FogEnd, FogColor);
}