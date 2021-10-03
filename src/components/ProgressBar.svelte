<script>
   import { tweened } from 'svelte/motion';
   import { quartIn } from 'svelte/easing';
   import viewport from './viewport';

   export let progress;
   export let color = "#00deff";
   export let text = "";

   const _progress = tweened(0, {
		duration: 1000,
		easing: quartIn
	});

</script>

<svg
   use:viewport
   on:enterViewport={()=> _progress.set(+progress)}
   on:exitViewport={()=> _progress.set(0)}
   width="130.71838mm"
   height="32.185364mm"
   viewBox="0 0 130.71838 32.185363"
   version="1.1"
   id="svg5">
  <g
     id="layer1"
     transform="translate(-34.37533,-75.114152)">
    <ellipse
       style={`fill:none;fill-opacity:1;stroke:${color};stroke-width:2.30254;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:9.21015, 4.60508;stroke-dashoffset:0;stroke-opacity:1;stop-color:#000000`}
       id="path848"
       cx="48.446354"
       cy="89.442535"
       rx="12.927509"
       ry="13.177114" />
      <rect class="progress"
       style={`fill:${color};fill-opacity:1;stroke:${color};stroke-width:2.70751;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:10.83, 5.415;stroke-dashoffset:0;stroke-opacity:1;stop-color:#000000`}
       id="rect10954"
       width={$_progress}
       height="9.4212646"
       x="65.290451"
       y="84.73188"
       ry="0.040589564" />
    <rect
       style={`fill:none;fill-opacity:1;stroke:${color};stroke-width:0.792255;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;stop-color:#000000`}
       id="rect11058"
       width="100"
       height="17.789551"
       x="63.889839"
       y="80.595161"
       ry="0.1166325" />
    <path
       style={`fill:none;fill-opacity:1;stroke:${color};stroke-width:1.065;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
       d={`m 58.705035,106.7669 h ${text.length >= 10 ? 42.716795 + (text.length - 6) : 42.716795} l 8.28685,-8.286844`}
       id="path11213"
        />
    <path
       style={`fill:none;stroke:${color};stroke-width:1.065;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
       d="M 63.808591,78.504644 H 130.87811"
       id="path21068" />
    <text
       xml:space="preserve"
       style={`font-style:normal;font-weight:normal;font-size:6.70597px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:${color};fill-opacity:1;stroke:${color};stroke-width:0.16765;stroke-opacity:1`}
       x="66.468742"
       y="104.29498"
       id="text20428"><tspan
         id="tspan20426"
         style={`fill:${color};fill-opacity:1;stroke:${color};stroke-width:0.16765;stroke-opacity:1`}
         x="66.468742"
         y="104.29498">{text}</tspan></text>
         <text
            style={`font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8.81944px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;letter-spacing:0px;word-spacing:0px;fill:${color};fill-opacity:1;stroke:${color};stroke-width:0.264583;stroke-opacity:1`}
            x="40.026749"
            y="93.240623"
            id="text32324"><tspan
              id="tspan32322"
              style={`font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8.81944px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:${color};fill-opacity:1;stroke:${color};stroke-width:0.264583;stroke-opacity:1`}
              x="40.026749"
              y="93.240623">{Math.floor($_progress)}</tspan></text>
         <text
            style={`font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:7.05556px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;letter-spacing:0px;word-spacing:0px;fill:${color};fill-opacity:1;stroke:${color};stroke-width:0.264583;stroke-opacity:1`}
            x="51.071072"
            y="93.265602"
            id="text36649"><tspan
              id="tspan36647"
              style={`font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:7.05556px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:${color};fill-opacity:1;stroke:${color};stroke-width:0.264583;stroke-opacity:1`}
              x="51.071072"
              y="93.265602">%</tspan></text>
  </g>
</svg>

<style>
    svg {
        width: 100%;
        padding: 0 10px;
        max-height: 100px;
    }
</style>