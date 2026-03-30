#version 150

#moj_import <minecraft:light.glsl>
#moj_import <minecraft:fog.glsl>
#moj_import <minecraft:dynamictransforms.glsl>
#moj_import <minecraft:projection.glsl>

// Atributos de entrada
in vec3 Position;
in vec4 Color;
in vec2 UV0;
in vec2 UV1;
in ivec2 UV2;
in vec3 Normal;

// Saídas para o fragment shader
out float sphericalVertexDistance;
out float cylindricalVertexDistance;
out vec4 vertexColor;
out vec4 lightColor;
out vec2 texCoord0;
out vec2 texCoord1;
out vec2 texCoord2;

uniform sampler2D Sampler2;

void main() {
    // Cálculo de profundidade e distância de renderização
    sphericalVertexDistance = fog_spherical_distance(Position);
    cylindricalVertexDistance = fog_cylindrical_distance(Position);

    // Mapeamento de coordenadas de textura
    texCoord0 = UV0;
    texCoord1 = UV1;
    texCoord2 = UV2;

    // Processamento de iluminação de bloco e ambiente
    ivec2 lightCoord = UV2 / 16;
    vec4 blockLightData = texelFetch(Sampler2, lightCoord, 0);
    
    // Mixagem de luz baseada na normal do modelo
    vec4 sceneLighting = minecraft_mix_light(Light0_Direction, Light1_Direction, Normal, Color);
    
    // Definição das cores finais que serão passadas ao fragment shader
    vertexColor = sceneLighting * blockLightData;
    lightColor = Color * blockLightData;

    // Transformação de projeção final
    vec4 vPosition = vec4(Position, 1.0);
    gl_Position = ProjMat * ModelViewMat * vPosition;
}