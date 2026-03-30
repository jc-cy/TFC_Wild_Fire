#version 150

#moj_import <minecraft:fog.glsl>
#moj_import <minecraft:dynamictransforms.glsl>

uniform sampler2D Sampler0;

in float sphericalVertexDistance;
in float cylindricalVertexDistance;
in vec4 vertexColor;
in vec4 lightColor;
in vec4 overlayColor;
in vec2 texCoord0;

out vec4 fragColor;

void main() {
    vec4 color = texture(Sampler0, texCoord0);

#ifndef EMISSIVE
    int a = int(round(color.a * 255.0));

    // 🔥 252, 253, 254 → IGNORAM LUZ
    if (!(a == 252 || a == 253 || a == 254)) {
        color *= lightColor;
    }
#endif

    color *= vertexColor * ColorModulator;

    if (color.a < 0.1) {
        discard;
    }

#ifndef NO_OVERLAY
    color.rgb = mix(overlayColor.rgb, color.rgb, overlayColor.a);
#endif

    fragColor = apply_fog(
        color,
        sphericalVertexDistance,
        cylindricalVertexDistance,
        FogEnvironmentalStart,
        FogEnvironmentalEnd,
        FogRenderDistanceStart,
        FogRenderDistanceEnd,
        FogColor
    );
}