varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vMatCapUV;

uniform float uTime;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    // waveduv
    //vec2 wavedUv = vec2(vUv.x, vUv.y+sin(vUv.x*5. + uTime*0.04));
    
    // this is the half split
    float split_num = 2.;
    float strength = mod((1.-vUv.x)*split_num, 1.);
    strength += 0.25*sin(vUv.x+uTime*0.01);

    // light pattern
    //float strength = 0.015 / distance(vUv, vec2(0.5));

    // light pattern y-axis
    //float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
    
    vec3 yellow = vec3(0.996, 0.906, 0.055);
    vec3 white = vec3(1.0);

    vec3 mixedColor = mix(yellow, white, strength);

    gl_FragColor = vec4(mixedColor, 1.);
}