#version 150

#moj_import <minecraft:fog.glsl>

uniform sampler2D Sampler0;
uniform vec4 ColorModulator;
uniform float FogStart;
uniform float FogEnd;
uniform vec4 FogColor;

in float vDist;
in vec4 vCol;
in vec4 vLmap;
in vec4 vOver;
in vec2 vTex0;

out vec4 fragColor;

// patoviskiz was here
void main() {
    vec4 raw = texture(Sampler0, vTex0);

    #ifdef ALPHA_CUTOUT
        if (raw.a < ALPHA_CUTOUT) discard;
    #endif

    vec4 base = raw * vCol * ColorModulator;
    if (base.a < 0.1) discard;

    int alpha = int(round(base.a * 255.0));

    if (alpha >= 250 && alpha <= 254) {
        float s = (alpha == 251) ? 0.75 : (alpha == 250 ? 0.5 : 1.0);
        vec4 outBypass = raw * ColorModulator;
        outBypass.rgb *= s;
        outBypass.a = base.a;

        #ifndef NO_OVERLAY
            outBypass.rgb = mix(vOver.rgb, outBypass.rgb, vOver.a);
        #endif

        fragColor = outBypass;
        return;
    }

    #ifndef NO_OVERLAY
        base.rgb = mix(vOver.rgb, base.rgb, vOver.a);
    #endif

    #ifndef EMISSIVE
        base *= vLmap;
    #endif

    fragColor = linear_fog(base, vDist, FogStart, FogEnd, FogColor);
}