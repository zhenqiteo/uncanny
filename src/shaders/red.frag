varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vMatCapUV;

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

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

    vec2 st = gl_FragCoord.xy/uResolution;

    vec3 color = vec3(0.);
    //st.y *= uResolution.y/uResolution.x;

    vec2 pos = st.yx*vec2(4.,4.);

    float pattern = pos.x;

    pos = rotate2d( noise(pos.yx) ) * pos;
    // pos.x += uTime*0.1 + uMouse.x/uResolution.x;
    // pos += uMouse.x/uResolution.x;

    pattern = lines(pos,1.);
    
    color = vec3(0.756,0.049,1.000)*fill(pattern,1.);   
    gl_FragColor = vec4(st, 0.1,1.0);

}