#version 150

#moj_import <minecraft:fog.glsl>
#moj_import <minecraft:dynamictransforms.glsl>

// Variáveis de entrada
in float sphericalVertexDistance;
in float cylindricalVertexDistance;
in vec4 lightColor;
in vec4 vertexColor;
in vec2 texCoord0;
in vec2 texCoord1;

out vec4 fragColor;

uniform sampler2D Sampler0;

void main() {

    vec4 baseTexture = texture(Sampler0, texCoord0);
    vec4 outColor = baseTexture * ColorModulator;
    
    ivec4 pixelData = ivec4(round(texelFetch(Sampler0, ivec2(texCoord0 * textureSize(Sampler0, 0)), 0) * 255.0));
    int alphaRef = pixelData.a;

    bool isSpecialMaterial = (alphaRef == 200 || alphaRef == 253 || alphaRef == 252 || alphaRef == 254);

    if (isSpecialMaterial) {
        // EMISSIVE → não aplica iluminação
        outColor = vec4(outColor.rgb, 1.0);
    } else {
        // iluminação normal
        outColor *= vertexColor;
    }

    if (outColor.a < 0.1) {
        discard;
    }

    fragColor = apply_fog(
        outColor,
        sphericalVertexDistance,
        cylindricalVertexDistance,
        FogEnvironmentalStart,
        FogEnvironmentalEnd,
        FogRenderDistanceStart,
        FogRenderDistanceEnd,
        FogColor
    );
}