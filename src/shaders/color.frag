varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vMatCapUV;

uniform float uTime;
uniform vec2 uMouse;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}

void main() {

    vec3 red = vec3(1., 0.404, 0.369);
    vec3 blue = vec3(0.286, 0.576, 0.996);
    vec3 yellow = vec3(0.996, 0.906, 0.055);
    vec3 white = vec3(1.0);
    
    // waveduv
    vec2 wavedUv = vec2(vUv.y, vUv.x+sin(vUv.x*3. + uTime*0.01));

    float strength = smoothstep(0.3, 0.9, noise(vUv*7.));
    strength += 0.25*sin(vUv.x+uTime*0.02);
    vec3 blueIsh = mix(white, blue, strength);
    vec3 mixedColor = mix(white, yellow, vPosition);

    gl_FragColor = vec4(blueIsh, 1.0);
}