var c = Sketch.create(),
		noiseCanvas = document.createElement('canvas'),
		nSize = 10,
		ctx = noiseCanvas.getContext('2d'),
		simplex = new SimplexNoise(),
		t = 0,
		tGain = 0.0075,
		gGain = ~~random(1000, 2000),
		bGain = ~~random(3000, 4000);

noiseCanvas.width = noiseCanvas.height = nSize;

var noiseImg = ctx.getImageData(0, 0, nSize, nSize),
		data = noiseImg.data;

c.draw = function() {
	
	// Save our noise to a hidden canvas in the rgb values.
	// We use gGain and bGain to offset b/g values without needing a seperate seed.
	for ( var x = 0; x < nSize; x++ ) {
		for (var y = 0; y < nSize; y++ ) {
			var r = ~~map(simplex.noise3D(x, y, t), -1, 1, 0, 255),
					g = ~~map(simplex.noise3D(x, y, t + gGain), -1, 1, 0, 255),
					b = ~~map(simplex.noise3D(x, y, t + bGain), -1, 1, 0, 255);
			data[(x + y * nSize) * 4 + 0] = r;
			data[(x + y * nSize) * 4 + 1] = g;
			data[(x + y * nSize) * 4 + 2] = b;
			data[(x + y * nSize) * 4 + 3] = 255;
		}
	}
	t += tGain;
	ctx.putImageData(noiseImg, 0, 0);
	
	// Draw our tiny noise image to our large canvas.
	c.drawImage(noiseCanvas, 0, 0, c.width, c.height);
}