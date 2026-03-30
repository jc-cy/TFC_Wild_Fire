#version 150
#moj_import <fog.glsl>

uniform sampler2D Sampler0;
uniform vec4 ColorModulator;
uniform float FogStart;
uniform float FogEnd;
uniform vec4 FogColor;

in float vertexDistance;
in vec4 vertexColor;
in vec4 lightMapColor;
in vec4 overlayColor;
in vec2 texCoord0;

out vec4 fragColor;
//patovskiz was here
void main() {
    vec4 tex = texture(Sampler0, texCoord0);
    if (tex.a < 0.1) discard;

    ivec2 sz = textureSize(Sampler0, 0);
    ivec2 px = clamp(ivec2(texCoord0 * vec2(sz)), ivec2(0), sz - 1);
    int alpha = int(floor(texelFetch(Sampler0, px, 0).a * 255.0 + 0.5));

    bool noLight = alpha >= 250 && alpha <= 254;

    if (noLight) {
        float brightness = (alpha == 251) ? 0.75 : (alpha == 250) ? 0.5 : 1.0;
        vec4 out0 = tex * ColorModulator;
        out0.rgb *= brightness;
        out0.rgb = mix(overlayColor.rgb, out0.rgb, overlayColor.a);
        out0.a = tex.a;
        fragColor = linear_fog(out0, vertexDistance, FogStart, FogEnd, FogColor);
        return;
    }

    vec4 out0 = tex * vertexColor * ColorModulator;
    out0.rgb = mix(overlayColor.rgb, out0.rgb, overlayColor.a);
    out0 *= lightMapColor;
    fragColor = linear_fog(out0, vertexDistance, FogStart, FogEnd, FogColor);
}