(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bganim = function() {
	this.initialize(img.bganim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.t1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C3741").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCATIgNBvIgbAAIANhtQACgMAFgLQAGgKAHgFIADgDIgBAAIgQAEIgSAFIgGgVQARgFAVgEQAVgEAQAAQAjAAATATQASATAAAjIAABmg");
	this.shape.setTransform(667,113.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C3741").s().p("AAnBWIAAhrQAAgWgKgKQgKgKgWAAIg+AAIAAgWIBAAAQAhAAARAQQARARAAAgIAABqgAhBBWIAAg7QAAgNACgIIAGgOIAWAAIgDAOIAAAUIAAA8g");
	this.shape_1.setTransform(648.7,113.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C3741").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_2.setTransform(635,113.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C3741").s().p("AAvBWIhMhpQgQAKAAAXIAABIIgaAAIAAg+QAAgXAHgNQAIgOAQgIIglgzIAeAAIA1BKIAqhKIAeAAIg3BgIA2BLg");
	this.shape_3.setTransform(614.5,113.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C3741").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCATIgNBvIgbAAIANhtQACgMAFgLQAGgKAHgFIADgDIgBAAIgQAEIgSAFIgGgVQARgFAVgEQAVgEAQAAQAjAAATATQASATAAAjIAABmg");
	this.shape_4.setTransform(594.8,113.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C3741").s().p("Ag9BWIAAgWIBcAAIhniVIAfAAIAtBFIAmhFIAfAAIg1BcIAuBBIAAAOg");
	this.shape_5.setTransform(577.1,113.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C3741").s().p("AhEBMIAHgUQAZAKAVABQgMgNgDgQIgdh9IAcAAIAbB+IAEAPIAEAMQASgFAKgMQAKgMAAgVIAAhnIAbAAIAABnQAAAXgKAQQgJAQgSAJQgRAIgVAAQgeAAgggMg");
	this.shape_6.setTransform(559.5,114.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C3741").s().p("AACAwIAAhJIgeAAIAAgWIA5AAIAABfg");
	this.shape_7.setTransform(546.4,110.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C3741").s().p("AAnBWIAAhrQAAgWgJgKQgKgKgUAAIgmAAIgBCVIgbAAIAAirIBCAAQAhAAAQAQQARAQAAAiIAABpg");
	this.shape_8.setTransform(526.3,113.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C3741").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_9.setTransform(512,113.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C3741").s().p("Ag+B1IAAh9QAAgNACgIIAFgPIAWAAQgCAGAAAIIgBAUIAAB/gAgHAiQANAAALgGQALgGAFgLQAHgLgBgOIAAhQIhpAAIAAgWICFAAIAABmQAAAUgKAQQgJAQgRAJQgRAIgVABg");
	this.shape_10.setTransform(498.8,117);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C3741").s().p("AAfBWIAAh3QAAgOgIgIQgJgIgOAAIg5AAIAAgWIA6AAQARAAANAGQANAHAHAMQAHAMAAARIAAB1g");
	this.shape_11.setTransform(481.5,113.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C3741").s().p("AgOBpQgFgFAAgGQAAgHAFgFQAEgEAHAAQAHAAAFAEQAEAFAAAHQAAAGgEAFQgFAEgHAAQgHAAgEgEgAgRAvQAAgOADgJQACgJAFgHQAFgHAJgJIAFgFIALgMQAEgFADgHQACgGAAgJQAAgPgIgJQgIgJgPAAQgIAAgHAEQgIADgEAHQgFAGAAAKIgcAAQAAgQAJgMQAHgMAOgHQAOgGAQAAQATAAAMAHQAOAHAGAMQAIANgBARQAAAMgEALQgGALgIAJQgHAJgLAKQgIAHgDAJQgDAJAAAMg");
	this.shape_12.setTransform(467.7,111.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#086372").s().p("AAhBXIAAhuQAAgSgJgIQgIgIgRAAIhEAAIAAgdIBGAAQAhAAATARQARAQAAAfIAABtgAhFBXIAAg7QAAgPACgIQADgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_13.setTransform(667.6,62.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#086372").s().p("AhDB2IAAh7QAAgPACgIQADgIAEgGIAeAAQgDALAAAWIAAB/gAgIAcQATgBALgMQAMgMAAgUIAAhGIhoAAIAAgdICNAAIAABjQAAAVgKARQgKARgSAJQgSAJgXABg");
	this.shape_14.setTransform(648.9,65.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#086372").s().p("AgeBxIA7iQIhhAAIAAhQIAmAAIAAAzIBjAAIAAAXIg8CWg");
	this.shape_15.setTransform(631.4,60.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#086372").s().p("AgDAxIAAhEIgdAAIAAgdIBBAAIAABhg");
	this.shape_16.setTransform(617.8,59);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#086372").s().p("AAFBXIAAiQIhNAAIAAgdICQAAIAAAdIgdAAIAACQg");
	this.shape_17.setTransform(605.5,62.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#086372").s().p("AgDAxIAAhEIgdAAIAAgdIBBAAIAABhg");
	this.shape_18.setTransform(591.7,59);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#086372").s().p("AAoBXIhGhjQgEAEgDAGQgCAFgBAJIAABLIgjAAIAAg8QAAgYAIgNQAHgOAQgJIgmg1IAqAAIAuBDIAjhDIAqAAIg2BiIA1BLg");
	this.shape_19.setTransform(570.6,62.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#086372").s().p("AhTBWIAAgdIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgLADgNQADgMAGgIIgeAAIAAgdIBUAAQAjAAARARQARAQAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgCg");
	this.shape_20.setTransform(549.9,62.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#086372").s().p("AhTBWIAAgdIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgLADgNQADgMAGgIIgeAAIAAgdIBUAAQAjAAARARQARAQAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgCg");
	this.shape_21.setTransform(523.3,62.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#086372").s().p("Ag0BUQgZgGgWgKIAAicIAkAAIAACIQAOAGAPADQAPADANAAQAUAAAQgGQAQgGAJgMQAJgNAAgSIAAhdIAkAAIAABhQAAAagOASQgOATgYAIQgYAJgdAAQgXABgYgGgAgaAgQAEgFACgLQACgJAAgMIAAhTIAjAAIAABLQAAAOgDAMQgEAMgGAIg");
	this.shape_22.setTransform(502.2,63);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#086372").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_23.setTransform(484.5,62.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#086372").s().p("AhJBXIAAgeIBZAAIAAhQQAAgSgJgIQgHgIgSAAIgtAAIAAgdIAvAAQAhAAASARQASAQAAAfIAABPIAVACIAAAcg");
	this.shape_24.setTransform(472.5,62.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#086372").s().p("AhTBWIAAgdIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgLADgNQADgMAGgIIgeAAIAAgdIBUAAQAjAAARARQARAQAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgCg");
	this.shape_25.setTransform(453.8,62.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#086372").s().p("AAWB2IAAjNIhQAAIAAgdIB1AAIAADqg");
	this.shape_26.setTransform(436.8,65.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#086372").s().p("AhJBXIAAgeIBZAAIAAhQQAAgSgJgIQgHgIgSAAIgtAAIAAgdIAvAAQAhAAASARQASAQAAAfIAABPIAVACIAAAcg");
	this.shape_27.setTransform(414.6,62.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#086372").s().p("AAEBZIAAgdIAlAAIAAhMQABgUgKgLQgIgLgQABQgMgBgIAKQgIALgDASIgLBsIglAAIAMhnQABgMAGgLQAFgKAGgGIACgCIAAgBIgPAEIgPAEIgIgbQAQgFAWgEQAWgEATAAQAlAAATAUQAUATAAAmIAABkg");
	this.shape_28.setTransform(396.5,62.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#086372").s().p("AgeBxIA7iQIhhAAIAAhQIAmAAIAAAzIBjAAIAAAXIg9CWg");
	this.shape_29.setTransform(379,60.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#086372").s().p("AhJBXIAAgeIBZAAIAAhQQAAgSgJgIQgHgIgSAAIgtAAIAAgdIAvAAQAhAAASARQASAQAAAfIAABPIAVACIAAAcg");
	this.shape_30.setTransform(363.1,62.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#086372").s().p("AgIB2IAAjNIgSAAIAAgdIA1AAIAADqg");
	this.shape_31.setTransform(349.6,65.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#086372").s().p("AAhBXIAAhuQAAgSgJgIQgIgIgRAAIhDAAIAAgdIBEAAQAiAAASARQASAQAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_32.setTransform(329.2,62.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#086372").s().p("AAEBZIAAgdIAlAAIAAhMQABgUgKgLQgIgLgQABQgMgBgJAKQgHALgDASIgLBsIglAAIAMhnQACgMAFgLQAFgKAGgGIACgCIAAgBIgPAEIgPAEIgIgbQARgFAVgEQAWgEATAAQAlAAATAUQAVATgBAmIAABkg");
	this.shape_33.setTransform(310.2,62.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#086372").s().p("AgDAxIAAhEIgdAAIAAgdIBBAAIAABhg");
	this.shape_34.setTransform(294.9,59);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#086372").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_35.setTransform(285.5,62.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#086372").s().p("AhIBMIAIgbQAXAJATACQgEgFgFgHQgDgHgCgHIgch6IAlAAIAbB8QACAOAFAIQAOgFAIgKQAIgLAAgRIAAhnIAlAAIAABlQAAAYgKASQgLARgSAIQgSAJgYAAQghAAgggNg");
	this.shape_36.setTransform(271.7,63);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#086372").s().p("AAFBXIAAiQIhNAAIAAgdICQAAIAAAdIgdAAIAACQg");
	this.shape_37.setTransform(255.2,62.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1copy, new cjs.Rectangle(244.9,38,433.8,99.2), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D44209").ss(5,1,1).p("AATk/IgTATIgSgTAJtFAIptpsIpsJs");
	this.shape.setTransform(84.7,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#D44209","#F6D6C9"],[0,1],-724.9,-32,724.9,-32).ss(5,1,1).p("EhtTAAAIjiAAEBw2AAAMjKuAAA");
	this.shape_1.setTransform(722.2,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#036F79","#05919E"],[0,1],0.1,53.3,0,-53.3).s().p("AoUAAIIUoUIIVIUIoUIVg");
	this.shape_2.setTransform(84.7,65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#024A46","#04707A"],[0,1],-722.1,0,722.1,0).s().p("EhZ5AFAIptpsIATgTIgTATIgTgTIATATIptJsIjiAAIAAp/IM8AAIAmAAMDUJAAAIAAJ/gEhjmgEsgEhjmgEsg");
	this.shape_3.setTransform(722.2,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-2.5,-2.5,1449.3,120.8), null);


(lib.Title1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7B5QgagOgOgZQgPgaAAgiIAAiaIBFAAIAACiQAAAQAGAMQAFAMALAGQAKAHANAAQANAAALgHQAKgGAGgMQAGgMAAgQIAAhLQAAgigeAAQgJAAgOADIgHgsQAMgGAOgFQAPgEANAAQAXAAARAKQARAKAJAUQAJASAAAbIAABIQAAAigPAaQgOAZgaAOQgaAPgiAAQghAAgagPg");
	this.shape.setTransform(727.3,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBLIAAhgIgpAAIAAg1IBtAAIAACVg");
	this.shape_1.setTransform(703.4,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBLIAAhgIgpAAIAAg1IBtAAIAACVg");
	this.shape_2.setTransform(688,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAICHIAAg1IAuAAIAAhoQAAgbgKgOQgLgPgTAAQgSAAgLAPQgKAOgCAcIgRCcIhDAAIAQiTQADgSAGgQQAIgQAIgJIAEgDIAAgBIgVAFQgMADgIAEIgQgyQAagJAjgGQAigGAcAAQA8AAAgAfQAfAfABA7IAACUg");
	this.shape_3.setTransform(666.1,25.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZCEIAAitQgBgSgJgJQgLgJgRAAIhPAAIAAg2IBUAAQAfAAAXAMQAXAKAMAVQANAVAAAdIAACqg");
	this.shape_4.setTransform(639.2,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Title1copy2, new cjs.Rectangle(81.9,-10,661.2,70.1), null);


(lib.FBcopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+BrIgRAAIAAjVIBLAAQAmAAAUAPQAWAPgBAdQABAPgIAMQgHAMgQAGQASAEAJANQAIAMAAARQAAAfgUAQQgUAQgmAAgAghBGIAjAAQAQAAAIgHQAIgIAAgMQAAgcgeAAIglAAgAghgQIAdAAQAQAAAJgHQAJgGgBgNQAAgOgIgGQgIgGgRAAIgdAAg");
	this.shape.setTransform(1005.8,-271.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFBrIAAjVIAuAAIBdAAIAAAmIhdAAIAAA0IBTAAIAAAkIhTAAIAABXg");
	this.shape_1.setTransform(988.4,-271.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApNFUQgKAAAAgKIAAqTQAAgKAKAAISbAAQAKAAAAAKIAAKTQAAAKgKAAg");
	this.shape_2.setTransform(995,-273.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AApBXIhGhjQgFAEgDAGQgCAFAAAIIAABMIgkAAIAAg8QAAgYAHgNQAIgOAQgJIgmg1IApAAIAvBDIAkhDIApAAIg2BiIA1BLg");
	this.shape_3.setTransform(205.3,-74.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhTBWIAAgdIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgLADgNQADgMAGgIIgeAAIAAgdIBUAAQAjAAARARQARAQAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgCg");
	this.shape_4.setTransform(184.5,-74.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBXIhGhjQgEAEgDAGQgCAFgBAIIAABMIgjAAIAAg8QAAgYAHgNQAIgOAQgJIgmg1IAqAAIAuBDIAjhDIAqAAIg2BiIA1BLg");
	this.shape_5.setTransform(159,-74.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBxIA7iQIhhAAIAAhQIAlAAIAAAzIBkAAIAAAXIg9CWg");
	this.shape_6.setTransform(140.9,-77.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_7.setTransform(127.6,-74.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkBWQgQgDgOgFIAHgbQANAEAOACQAOACAKAAQAWAAALgLQAMgKAAgVIAAhMIg7AAQgEAIgCALQgCAKAAAKIAAALQAGACANAAIAAAaIgNABQgNAAgKgCQgKgDgJgFIAAgSQgBgPAEgNQADgOAGgJIgUAAIAAgdICVAAIAABjQAAAagLASQgKARgSAIQgSAJgWAAQgPAAgRgDg");
	this.shape_8.setTransform(113.7,-74.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgIgIQgJgIgRAAIhEAAIAAgdIBFAAQAiAAASARQASAQAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_9.setTransform(95.1,-74.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOBmQgGgFAAgJQAAgIAGgGQAGgFAIAAQAJAAAGAFQAGAGAAAIQAAAJgGAFQgFAGgKAAQgIAAgGgGgAgPAqIgEiVIAmAAIgECVg");
	this.shape_10.setTransform(82.1,-76.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAEBZIAAgdIAlAAIAAhMQAAgUgJgLQgIgLgQABQgMgBgJALQgHAKgDASIgLBsIglAAIAMhnQABgMAGgLQAEgKAHgGIACgCIAAgBIgPAEIgPAFIgJgbQASgHAVgDQAWgEATAAQAlAAATAUQAVATgBAmIAABkg");
	this.shape_11.setTransform(222.5,-47);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhABXIAAgdIBUAAIhhiQIAqAAIAnA/IAgg/IAqAAIg0BeIAqA9IAAASg");
	this.shape_12.setTransform(204.3,-46.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeBxIA7iQIhhAAIAAhQIAmAAIAAAyIBjAAIAAAYIg9CWg");
	this.shape_13.setTransform(187.9,-49.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAFBZIAAgdIAkAAIAAhMQABgUgJgLQgJgLgQABQgNgBgHALQgJAKgCASIgMBsIgkAAIAMhnQABgMAFgLQAGgKAGgGIADgCIgBgBIgPAEIgPAFIgIgbQAQgHAXgDQAVgEATAAQAlAAAUAUQATATAAAmIAABkg");
	this.shape_14.setTransform(170,-47);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgRgJgJQgIgIgRAAIhDAAIAAgdIBFAAQAhAAASARQASAQAAAfIAABtgAhFBXIAAg7QAAgPACgIQADgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_15.setTransform(151.3,-46.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgIgIQgJgIgRAAIhEAAIAAgdIBGAAQAhAAATAQQARARAAAfIAABtgAhFBXIAAg7QAAgPACgIQADgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_16.setTransform(305,-87.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhTBXIAAgeIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgMADgMQADgMAGgIIgeAAIAAgdIBUAAQAjAAARAQQARARAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgBg");
	this.shape_17.setTransform(285.3,-87.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag0BUQgZgGgWgKIAAicIAkAAIAACIQAOAFAPAEQAPADANAAQAUAAAQgGQAQgGAJgMQAJgNAAgSIAAhdIAkAAIAABhQAAAagOATQgOARgYAKQgYAIgdABQgXAAgYgGgAgaAgQAEgFACgLQACgJAAgMIAAhTIAjAAIAABLQAAAOgDAMQgEAMgGAIg");
	this.shape_18.setTransform(264.2,-87.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhIBXIAAgeIBYAAIAAhQQAAgSgIgIQgIgIgSAAIgtAAIAAgdIAvAAQAhAAASAQQASARAAAfIAABOIAUADIAAAcg");
	this.shape_19.setTransform(234.5,-87.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgJgIQgIgIgRAAIhDAAIAAgdIBEAAQAiAAASAQQASARAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_20.setTransform(217.3,-87.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgJgIQgIgIgRAAIhDAAIAAgdIBEAAQAiAAASAQQASARAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_21.setTransform(191.6,-87.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBXIgQgCIAAgcQAKABALAAQALAAAGgGQAEgGAAgNIAAhbIgfAAIAAgdIBEAAIAAB7QAAAZgNAOQgNANgXAAIgOgBg");
	this.shape_22.setTransform(176,-87.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag/BRIAGgbQAWAFASAAQAWAAAKgKQAMgLAAgUIAAhMIhUAAIAAgdIB5AAIAABiQAAAngVATQgUATgkAAQgXAAgbgHg");
	this.shape_23.setTransform(162.1,-87.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_24.setTransform(149.4,-87.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXBXIgQgCIAAgcQAKABALAAQALAAAGgGQAEgGAAgNIAAhbIgfAAIAAgdIBEAAIAAB7QAAAZgNAOQgNANgXAAIgOgBg");
	this.shape_25.setTransform(138.8,-87.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgIgIQgJgIgRAAIhEAAIAAgdIBFAAQAiAAATAQQARARAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_26.setTransform(124.8,-87.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgIgIQgJgIgRAAIhEAAIAAgdIBFAAQAiAAATAQQARARAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_27.setTransform(99.2,-87.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgDAxIAAhEIgdAAIAAgdIBBAAIAABhg");
	this.shape_28.setTransform(84.4,-91.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAoBXIhGhjQgEAEgDAGQgCAGgBAHIAABMIgjAAIAAg8QAAgXAIgOQAHgOAQgJIgmg1IApAAIAvBDIAjhDIAqAAIg2BiIA1BLg");
	this.shape_29.setTransform(70.8,-87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:127.6,y:-74.9}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_7,p:{x:246.5,y:-87.9}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	// Layer_4
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C6420C").s().p("A8cBIQgpAAAAgQIAAhvQAAgQApAAMA45AAAQApAAAAAQIAABvQAAAQgpAAg");
	this.shape_30.setTransform(142.2,9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C6420C").s().p("A8cBIQgpAAAAgQIAAhwQAAgPApAAMA45AAAQApAAAAAPIAABwQAAAQgpAAg");
	this.shape_31.setTransform(191,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(1));

	// Layer_1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#036F79").s().p("A9IPAQgKAAAAgKIAA9rQAAgKAKAAMA6RAAAQAKAAAAAKIAAdrQAAAKgKAAg");
	this.shape_32.setTransform(141,-71.3);
	this.shape_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1).to({_off:false},0).wait(1).to({x:189.8,y:-69.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(935,-307.9,120,68);


(lib.check_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBXIhGhjQgFAEgDAGQgDAGABAHIAABMIgkAAIAAg8QAAgXAIgOQAHgOAQgJIgmg1IAqAAIAuBDIAjhDIAqAAIg2BiIA1BLg");
	this.shape.setTransform(97.6,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAxIAAhEIgdAAIAAgdIBBAAIAABhg");
	this.shape_1.setTransform(81.7,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BUQgZgFgWgLIAAicIAkAAIAACHQAOAGAPAEQAPADANAAQAUAAAQgGQAQgGAJgMQAJgNAAgSIAAhdIAkAAIAABhQAAAagOATQgOARgYAKQgYAIgdABQgXAAgYgGgAgaAgQAEgFACgKQACgKAAgNIAAhSIAjAAIAABLQAAAOgDAMQgEAMgGAIg");
	this.shape_2.setTransform(65.1,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_3.setTransform(47.3,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBXIAAh1QAAgNgHgHQgIgHgMAAIg3AAIAAgdIA5AAQATAAAOAHQAOAGAIAOQAHANAAASIAABzg");
	this.shape_4.setTransform(35.2,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AqkjHIVJAAIAAGPI1JAAg");
	this.shape_5.setTransform(67.7,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#086372").s().p("AqkDIIAAmPIVJAAIAAGPg");
	this.shape_6.setTransform(67.7,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#73BEBA").s().p("AqkDIIAAmPIVJAAIAAGPg");
	this.shape_7.setTransform(67.7,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-4.5,137.4,48.1);


(lib.Title1_Animcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrBMQgHAAAAgEIAAgDQAAgFAHAAIA1AAQANAAAIgIQAIgIAAgPIAAhDQAAgdgfAAIgzAAIgFgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgDQAAgEAHAAIA0AAQAqAAAAAqIAAA+QAAAXgLAMQgMAMgVAAg");
	this.shape.setTransform(885,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANBMQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAgBIAAgGIAAiDIgVAAIgGgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIAAgDQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAAAIAGAAIAXAAIAIABQACABAAAFIAACIIAAAGQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAg");
	this.shape_1.setTransform(874.3,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA9BMQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIAAgGIAAhuIgBgKQgBgEgDgDQgDgCgDgBIgKgBIgxAAQAAAAgBAAQAAAAAAABQAAAAgBABQAAABAAABIgGAVQgDAOAAAQIAABKQAAAGgBACQgBACgFAAIgcAAIgGAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIAAgCQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAAAgBIAGAAIAWAAIAAhFQABgVAEgNIAHgYIgVAAQgHAAAAgFIAAgDQAAgEAHAAIBUAAQAgAAgBAhIAABuIAAAGQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_2.setTransform(862.4,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AApBMQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIAAgGIAAhwQAAgTgUAAIg5AAIgGgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABAAIAGAAIA4AAQAhAAAAAhIAABuIAAAGQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAg");
	this.shape_3.setTransform(848.1,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA9BMQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIAAgGIAAhuIgBgKQgBgEgCgDQgEgCgDgBIgKgBIgxAAQAAAAAAAAQgBAAAAABQAAAAAAABQgBABAAABIgGAVQgDAOAAAQIAABKQAAAGgBACQgBACgFAAIgcAAIgFAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIAAgCQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAABgBIAFAAIAXAAIAAhFQAAgVADgNIAIgYIgUAAQgIAAAAgFIAAgDQAAgEAIAAIBTAAQAgAAAAAhIAABuIgBAGQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_4.setTransform(833.4,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(12));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhDAAFtIBRrsMB3IgA3INpNtg");
	mask.setTransform(374.7,19.7);

	// Layer 1
	this.instance = new lib.Title1copy2();
	this.instance.parent = this;
	this.instance.setTransform(709.5,22.2,1,1,0,0,0,371.5,22.2);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:684.3,regY:25.9,x:964.6,y:25.3,alpha:0.16},0).wait(1).to({x:912,y:24.7,alpha:0.306},0).wait(1).to({x:864.4,y:24.2,alpha:0.438},0).wait(1).to({x:821.7,y:23.7,alpha:0.556},0).wait(1).to({x:784.1,y:23.3,alpha:0.66},0).wait(1).to({x:751.6,y:22.9,alpha:0.75},0).wait(1).to({x:724,y:22.6,alpha:0.826},0).wait(1).to({x:701.4,y:22.4,alpha:0.889},0).wait(1).to({x:683.9,y:22.2,alpha:0.938},0).wait(1).to({x:671.4,y:22.1,alpha:0.972},0).wait(1).to({x:663.9,y:22,alpha:0.993},0).wait(1).to({regX:371.5,regY:22.2,x:348.5,y:18.2,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(419.9,-10,474.1,70.1);


(lib.a1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
		
		this.check_btn.addEventListener("click" ,  checkAns);
		
		
		function checkAns(e)
		{
		    var input = myBox.value;
		    
			if(input == "מצלמה")
			{
				showFb(true);
			}
			else
			{
				showFb(false);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// k1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#73BEBA").ss(2,1,1).p("AByhtIAADbIjjAAIAAjbg");
	this.shape.setTransform(-507.8,-31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1CA4AE").s().p("AhxBuIAAjbIDjAAIAADbg");
	this.shape_1.setTransform(-507.8,-31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C3741").s().p("Ag9BFIAGgTQAXAJASABQgKgLgDgPIgahxIAZAAIAZBzIADANIAEAKQAQgDAJgMQAJgLAAgSIAAheIAYAAIAABdQAAAUgIAQQgJAOgQAIQgPAHgUABQgagBgdgKg");
	this.shape_2.setTransform(827.5,169.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C3741").s().p("AgYBlIA4iGIhaAAIAAhDIAYAAIAAAvIBdAAIAAAPIg5CLg");
	this.shape_3.setTransform(813.7,166.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C3741").s().p("AACAsIAAhDIgbAAIAAgUIAzAAIAABXg");
	this.shape_4.setTransform(801.9,165.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C3741").s().p("AAbBpIAAi9IhNAAIAAgUIBlAAIAADRg");
	this.shape_5.setTransform(791.1,171.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C3741").s().p("AgYBlIA4iGIhaAAIAAhDIAYAAIAAAvIBdAAIAAAPIg5CLg");
	this.shape_6.setTransform(771.6,166.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C3741").s().p("Ag9BFIAGgTQAXAJASABQgKgLgDgPIgahxIAZAAIAZBzIADANIAEAKQAQgDAJgMQAJgLAAgSIAAheIAYAAIAABdQAAAUgIAQQgJAOgQAIQgPAHgUABQgagBgdgKg");
	this.shape_7.setTransform(756,169.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C3741").s().p("AggBMIABgTQAIACALAAQALAAAEgHQAGgFgBgOIAAhbIgdAAIAAgUIA2AAIAABxQAAAWgKALQgLALgTAAQgMAAgNgDg");
	this.shape_8.setTransform(743.3,169.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C3741").s().p("AgDBOIAAiHIgSAAIAAgUIAqAAIAACbg");
	this.shape_9.setTransform(734.7,169.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C3741").s().p("AhJBNIAAgUIAKABQALAAAFgGQAFgGAAgMIAAgxQAAgMAEgLQADgMAFgIIgdAAIAAgUIBIAAQAeABAQAPQAPAOAAAeIAABfIgZAAIAAhgQAAgVgIgJQgJgIgTgBIgVAAQgFAIgCAKQgDALAAAMIAAA0QAAAVgKALQgKAMgTAAIgQgCg");
	this.shape_10.setTransform(721.9,169.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C3741").s().p("AADBPIAAgUIAoAAIAAhKQAAgVgKgLQgJgLgSAAQgMABgIAJQgJAKgCARIgMBkIgYAAIAMhhQABgMAFgJQAFgJAHgGIACgCIAAAAIgPAEIgQAEIgGgTQAPgEATgEQATgDAPAAQAgAAAQARQARAQAAAgIAABcg");
	this.shape_11.setTransform(699,169);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg5AAIAAgUIA6AAQAdAAAQAPQAPAPABAdIAABggAg6BOIAAg1QAAgMACgHIAEgNIAUAAIgCAMIgBASIAAA3g");
	this.shape_12.setTransform(682.6,169.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C3741").s().p("AAcBOIAAhsQAAgMgIgIQgHgHgNAAIgzAAIAAgUIA0AAQAQAAALAGQAMAGAGALQAGALAAAPIAABqg");
	this.shape_13.setTransform(667.5,169.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C3741").s().p("AgJBdQgEgEAAgGQAAgGAEgEQADgEAGAAQAHAAAEAEQADAEABAGQgBAGgDAEQgEAEgHAAQgGAAgDgEgAgKApIgCiJIAZAAIgDCJg");
	this.shape_14.setTransform(658.1,167.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C3741").s().p("AhJBNIAAgUIAKABQALAAAFgGQAFgGAAgMIAAgxQAAgMAEgLQADgMAFgIIgdAAIAAgUIBIAAQAeABAQAPQAPAOAAAeIAABfIgZAAIAAhgQAAgVgIgJQgJgIgTgBIgVAAQgFAIgCAKQgDALAAAMIAAA0QAAAVgKALQgKAMgTAAIgQgCg");
	this.shape_15.setTransform(638.4,169.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1C3741").s().p("AgCBOIAAiHIgSAAIAAgUIApAAIAACbg");
	this.shape_16.setTransform(626.5,169.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C3741").s().p("AAbBpIAAi9IhNAAIAAgUIBlAAIAADRg");
	this.shape_17.setTransform(615.6,171.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C3741").s().p("AgcBbQgNgFgJgMQgIgMgBgSIAXAAQACARAKAIQAJAJAPAAQALAAAIgGQAIgFAEgKQAFgKAAgNQAAgMgFgKQgEgKgJgEQgJgGgLAAQgHAAgGACQgFABgEACIgJAGIgUgEIAKhfIBiAAIAAAWIhNAAIgGA1QAGgEAIgCQAIgDAJAAQASAAANAIQAMAIAHAOQAHAOAAAUQAAASgGAPQgHAOgOAIQgOAIgTAAQgPAAgNgGg");
	this.shape_18.setTransform(595.9,167.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C3741").s().p("AAMBgIAAihIgwASIAAgXIBFgZIAEAAIAAC/g");
	this.shape_19.setTransform(578.6,167.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1C3741").s().p("AgsBLQgUgEgSgJIAAiNIAXAAIAAB/QANAGAOADQAOADANAAQASAAAOgGQAPgFAJgLQAJgMAAgQIAAhZIAXAAIAABbQAAAWgLAQQgMAPgUAHQgUAHgYABQgTgBgVgEgAgVAhQAFgFACgJQADgJAAgLIAAhOIAWAAIAABJQAAANgDAKQgDAKgGAHg");
	this.shape_20.setTransform(555.2,169.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1C3741").s().p("AggBMIABgTQAIACALAAQALAAAEgHQAFgFAAgOIAAhbIgdAAIAAgUIA2AAIAABxQAAAWgKALQgLALgTAAQgMAAgNgDg");
	this.shape_21.setTransform(538.8,169.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1C3741").s().p("AACAsIAAhDIgbAAIAAgUIAzAAIAABXg");
	this.shape_22.setTransform(529.9,165.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1C3741").s().p("AgCBOIAAiHIgSAAIAAgUIApAAIAACbg");
	this.shape_23.setTransform(522.1,169.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1C3741").s().p("AhJBNIAAgUIAKABQALAAAFgGQAFgGAAgMIAAgxQAAgMAEgLQADgMAFgIIgdAAIAAgUIBIAAQAeABAQAPQAPAOAAAeIAABfIgZAAIAAhgQAAgVgIgJQgJgIgTgBIgVAAQgFAIgCAKQgDALAAAMIAAA0QAAAVgKALQgKAMgTAAIgQgCg");
	this.shape_24.setTransform(509.2,169.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C3741").s().p("AhJBNIAAgUIAKABQALAAAFgGQAFgGAAgMIAAgxQAAgMAEgLQADgMAFgIIgdAAIAAgUIBIAAQAeABAQAPQAPAOAAAeIAABfIgZAAIAAhgQAAgVgIgJQgJgIgTgBIgVAAQgFAIgCAKQgDALAAAMIAAA0QAAAVgKALQgKAMgTAAIgQgCg");
	this.shape_25.setTransform(485.7,169.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1C3741").s().p("AgDBOIAAiHIgSAAIAAgUIAqAAIAACbg");
	this.shape_26.setTransform(473.7,169.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1C3741").s().p("AgdBNQgNgDgNgEIAFgSQALAEAMACIAWABQAUAAAMgLQAMgKAAgVIAAhLIg9AAQgEAHgDALQgCAMAAAKIAAANIAHABIANABIAAAUQgQAAgKgCQgJgCgJgFIgBgTQAAgNADgNQAEgNAFgIIgTAAIAAgUIB+AAIAABbQABAWgJAOQgJAPgPAIQgPAHgTAAQgMAAgOgCg");
	this.shape_27.setTransform(461.5,169.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1C3741").s().p("AACAsIAAhDIgbAAIAAgUIAzAAIAABXg");
	this.shape_28.setTransform(448.5,165.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1C3741").s().p("Ag9BFIAGgTQAXAJASABQgKgLgDgPIgahxIAZAAIAZBzIADANIAEAKQAQgDAJgMQAJgLAAgSIAAheIAYAAIAABdQAAAUgIAQQgJAOgQAIQgPAHgUABQgagBgdgKg");
	this.shape_29.setTransform(436.6,169.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg4AAIAAgUIA5AAQAeAAAPAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAGgNIAUAAIgCAMIgBASIAAA3g");
	this.shape_30.setTransform(414.9,169.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1C3741").s().p("AgDBOIAAiHIgSAAIAAgUIAqAAIAACbg");
	this.shape_31.setTransform(402.5,169.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1C3741").s().p("AALBOIAAiHIhIAAIAAgUIB7AAIAAAUIgaAAIAACHg");
	this.shape_32.setTransform(392,169.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1C3741").s().p("Ag9BFIAGgTQAXAJASABQgKgLgDgPIgahxIAZAAIAZBzIADANIAEAKQAQgDAJgMQAJgLAAgSIAAheIAYAAIAABdQAAAUgIAQQgJAOgQAIQgPAHgUABQgagBgdgKg");
	this.shape_33.setTransform(376.4,169.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg4AAIAAgUIA5AAQAdAAAQAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAGgNIATAAIgBAMIgBASIAAA3g");
	this.shape_34.setTransform(361.5,169.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1C3741").s().p("AgDBOIAAiHIgSAAIAAgUIArAAIAACbg");
	this.shape_35.setTransform(342.4,169.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1C3741").s().p("Ag/BOIAAgUIBUAAIAAhNQAAgUgJgJQgJgJgUAAIglAAIAAgUIAnAAQAdAAAQAPQAPAPAAAdIAABLIATACIAAATg");
	this.shape_36.setTransform(331.8,169.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg4AAIAAgUIA5AAQAeAAAPAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAGgNIAUAAIgCAMIgCASIAAA3g");
	this.shape_37.setTransform(316.7,169.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg5AAIAAgUIA6AAQAdAAAQAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAFgNIAUAAIgCAMIAAASIAAA3g");
	this.shape_38.setTransform(294.2,169.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1C3741").s().p("AhJBNIAAgUIAKABQALAAAFgGQAFgGAAgMIAAgxQAAgMAEgLQADgMAFgIIgdAAIAAgUIBIAAQAeABAQAPQAPAOAAAeIAABfIgZAAIAAhgQAAgVgIgJQgJgIgTgBIgVAAQgFAIgCAKQgDALAAAMIAAA0QAAAVgKALQgKAMgTAAIgQgCg");
	this.shape_39.setTransform(276.9,169.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1C3741").s().p("AgsBLQgUgEgSgJIAAiNIAXAAIAAB/QANAGAOADQAOADANAAQASAAAOgGQAPgFAJgLQAJgMAAgQIAAhZIAXAAIAABbQAAAWgLAQQgMAPgUAHQgUAHgYABQgTgBgVgEgAgVAhQAFgFACgJQADgJAAgLIAAhOIAWAAIAABJQAAANgDAKQgDAKgGAHg");
	this.shape_40.setTransform(258.7,169.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1C3741").s().p("AgDBOIAAiHIgSAAIAAgUIArAAIAACbg");
	this.shape_41.setTransform(243.5,169.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1C3741").s().p("Ag/BOIAAgUIBUAAIAAhNQAAgUgJgJQgJgJgUAAIglAAIAAgUIAnAAQAdAAAQAPQAPAPAAAdIAABLIATACIAAATg");
	this.shape_42.setTransform(232.9,169.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg4AAIAAgUIA5AAQAeAAAPAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAGgNIAUAAIgCAMIgBASIAAA3g");
	this.shape_43.setTransform(217.8,169.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1C3741").s().p("AgYBlIA4iGIhaAAIAAhDIAYAAIAAAvIBdAAIAAAPIg5CLg");
	this.shape_44.setTransform(196.4,166.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1C3741").s().p("AgsBLQgUgEgSgJIAAiNIAXAAIAAB/QANAGAOADQAOADANAAQASAAAOgGQAPgFAJgLQAJgMAAgQIAAhZIAXAAIAABbQAAAWgLAQQgMAPgUAHQgUAHgYABQgTgBgVgEgAgVAhQAFgFACgJQADgJAAgLIAAhOIAWAAIAABJQAAANgDAKQgDAKgGAHg");
	this.shape_45.setTransform(178.6,169.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1C3741").s().p("AAqBOIhEhfQgOAJAAAVIAABBIgYAAIAAg5QAAgUAHgMQAHgMAOgHIghgvIAbAAIAvBDIAmhDIAbAAIgyBXIAyBEg");
	this.shape_46.setTransform(159.6,169.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1C3741").s().p("AgXBlIA3iGIhaAAIAAhDIAZAAIAAAvIBcAAIAAAPIg5CLg");
	this.shape_47.setTransform(143.8,166.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg5AAIAAgUIA6AAQAdAAAQAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAGgNIAUAAIgCAMIgBASIAAA3g");
	this.shape_48.setTransform(128.8,169.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1C3741").s().p("AgsBLQgUgFgSgIIAAiNIAXAAIAACAQANAFAOADQAOADANAAQASAAAOgGQAPgFAJgLQAJgLAAgRIAAhZIAXAAIAABcQAAAVgLAQQgMAOgUAIQgUAHgYAAQgTAAgVgEgAgVAhQAFgFACgJQADgJAAgLIAAhOIAWAAIAABKQAAAMgDAKQgDAKgGAHg");
	this.shape_49.setTransform(825.4,127.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1C3741").s().p("AACArIAAhBIgbAAIAAgVIAzAAIAABWg");
	this.shape_50.setTransform(809.9,124);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1C3741").s().p("AADBPIAAgTIAoAAIAAhMQAAgUgKgLQgJgLgSAAQgMAAgIALQgJAJgCARIgMBkIgYAAIAMhhQABgLAFgKQAFgJAHgGIACgBIAAgBIgPADIgQAFIgGgTQAPgFATgDQATgDAPAAQAgAAAQAQQARARAAAgIAABcg");
	this.shape_51.setTransform(797.8,127.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1C3741").s().p("AACArIAAhBIgbAAIAAgVIAzAAIAABWg");
	this.shape_52.setTransform(784.6,124);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1C3741").s().p("AgYBlIA4iGIhaAAIAAhDIAYAAIAAAvIBdAAIAAAPIg5CLg");
	this.shape_53.setTransform(767.7,125.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1C3741").s().p("Ag/BOIAAgUIBUAAIAAhNQAAgUgJgJQgJgJgUAAIglAAIAAgUIAnAAQAdAAAQAPQAPAPAAAdIAABLIATACIAAATg");
	this.shape_54.setTransform(753.6,127.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1C3741").s().p("AgJBdQgEgEgBgGQABgGAEgEQADgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgHAAQgGAAgDgEgAgKApIgCiJIAYAAIgCCJg");
	this.shape_55.setTransform(743,125.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},30).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},14).wait(1));

	// input
	this.myBox = new lib.an_TextInput({'id': 'myBox', 'value':'הכנס תשובה כאן', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.myBox.setTransform(539.5,59.9,1.628,1.798,0,0,0,50.3,11);
	this.myBox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myBox).wait(44).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#024E4B").ss(1,1,1).p("As+jXIZ9AAIAAGuI59AAg");
	this.shape_56.setTransform(539.2,60.4);
	this.shape_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(44).to({_off:false},0).wait(1));

	// Layer_3
	this.feedback = new lib.FBcopy4();
	this.feedback.name = "feedback";
	this.feedback.parent = this;
	this.feedback.setTransform(296.9,538.3,1,1,0,0,0,187.5,96);
	this.feedback._off = true;

	this.timeline.addTween(cjs.Tween.get(this.feedback).wait(44).to({_off:false},0).wait(1));

	// check_btn
	this.check_btn = new lib.check_btn();
	this.check_btn.name = "check_btn";
	this.check_btn.parent = this;
	this.check_btn.setTransform(376.7,60.4,1,1,0,0,0,67.7,20);
	this.check_btn._off = true;
	new cjs.ButtonHelper(this.check_btn, 0, 1, 2, false, new lib.check_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.check_btn).wait(44).to({_off:false},0).wait(1));

	// k1
	this.instance = new lib.t1copy();
	this.instance.parent = this;
	this.instance.setTransform(521.9,-20.3,1,1,0,0,0,355.3,54.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:-0.3,alpha:1},14,cjs.Ease.get(1)).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-520.2,-43,24.9,24);


// stage content:
(lib._220 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// תוכן
	this.window1 = new lib.a1copy();
	this.window1.name = "window1";
	this.window1.parent = this;
	this.window1.setTransform(439.3,119.6);

	this.timeline.addTween(cjs.Tween.get(this.window1).wait(1));

	// Layer_3
	this.Show = new lib.Title1_Animcopy2();
	this.Show.name = "Show";
	this.Show.parent = this;
	this.Show.setTransform(647.9,9);

	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(720.5,63.6,1,1,0,0,0,722.1,63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.Show}]}).wait(1));

	// Layer_1
	this.instance_1 = new lib.bganim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(639,434.9,1809.9,915.2);
// library properties:
lib.properties = {
	id: '7C0A46359C981F4D8E61CEEFFBC26188',
	width: 1440,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bganim.jpg", id:"bganim"},
		{src:"components/lib/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7C0A46359C981F4D8E61CEEFFBC26188'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;