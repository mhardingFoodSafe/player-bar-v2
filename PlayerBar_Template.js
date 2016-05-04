(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1400,
	height: 793,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/slide_18wav.mp3?1462383932714", id:"slide_18wav"}
	]
};



// symbols:



(lib.scrubberSymbol = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3.6,1,1).p("ACiAAQAABDgwAvQgvAwhDAAQhCAAgvgwQgwgvAAhDQAAhCAwgvQAvgwBCAAQBDAAAvAwQAwAvAABCg");
	this.shape.setTransform(21.7,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhxByQgwgvAAhDQAAhCAwgvQAvgwBCAAQBDAAAvAwQAwAvAABCQAABDgwAvQgvAwhDAAQhCAAgvgwg");
	this.shape_1.setTransform(21.7,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,6.7,36.1,36.1);


(lib.playButtonSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AnkqNIPJKmIvJJ1g");
	this.shape.setTransform(-16.5,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AnjqNIPIKmIvIJ1g");
	this.shape_1.setTransform(-16.5,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#66FF00").ss(1,1,1).p("Ao0sjIRpAAIAAZHIxpAAg");
	this.shape_2.setTransform(-17.5,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33FF00").s().p("AozMkIAA5HIRnAAIAAZHg");
	this.shape_3.setTransform(-17.5,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-69,99,133);


(lib.pauseButtonSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-11,-36.5,22,73,11);
	this.shape.setTransform(18.1,2.5,0.739,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-11,-36.5,22,73,11);
	this.shape_1.setTransform(-19,2.5,0.739,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s("#FF9900").ss(1,1,1).rr(-11,-36.5,22,73,11);
	this.shape_2.setTransform(18.1,2.5,0.739,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s("#FF9900").ss(1,1,1).rr(-11,-36.5,22,73,11);
	this.shape_3.setTransform(-19,2.5,0.739,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#66FF00").ss(1,1,1).p("AmZmiIMzAAIAANFIszAAg");
	this.shape_4.setTransform(0,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF00").s().p("AmZGjIAAtFIMzAAIAANFg");
	this.shape_5.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-35,55.5,75);


(lib.currentTime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Gets proper minute and second values to use in string
		//Called every second (based on 30 fps)
		var currentTime;
		var currentSeconds = Math.round(this.getStage().getChildAt(0).currentFrame/30);
		var currentMinutes = 0;
		
		while((currentSeconds)>59) {
			currentMinutes++;
			currentSeconds -= 60;
		}
		if(currentSeconds<10){
			currentTime = currentMinutes + ":0" + currentSeconds;
		} else {
			currentTime = currentMinutes + ":" + currentSeconds;
		}
		this.currentTime.text = currentTime;
	}
	this.frame_29 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.currentTime = new cjs.Text("0:00", "14px 'Arial'", "#333333");
	this.currentTime.name = "currentTime";
	this.currentTime.lineHeight = 18;
	this.currentTime.lineWidth = 30;
	this.currentTime.setTransform(148,-15.6);

	this.timeline.addTween(cjs.Tween.get(this.currentTime).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148,-15.6,34,19.6);


(lib.clickableBarSymbol = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(1,1,1).p("EAyvABgIAAgeEgx3gBeIg3AAIAAC+");
	this.shape.setTransform(314.7,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("EAx4ABgMhkmAAAIAAihIAAgeMBldAAAIAAC/g");
	this.shape_1.setTransform(320.2,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.progressSliderSymbol = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Clickable Area
	this.instance = new lib.clickableBarSymbol();
	this.instance.setTransform(19.2,2.3,1,1,0,0,0,324.1,13);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.clickableBarSymbol(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("EgzKAAAMBmVAAA");
	this.shape.setTransform(12.5,6.7,0.987,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-4.4,656,23.2);


// stage content:
(lib.PlayerBar_Template = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var page_body = document.getElementsByTagName("body")[0];
		
		page_body.style.backgroundColor = "#ffffff";
		
		page_body.style.overflow = "hidden";
		
		page_body.style.position = "fixed";
		
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		
		stageWidth = page_canvas.width;
		
		stageHeight = page_canvas.height;
		
		
		var viewport = document.querySelector('meta[name=viewport]');
		
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		
		if (viewport === null) {
		
		 var head = document.getElementsByTagName('head')[0];
		
		 viewport = document.createElement('meta');
		
		 viewport.setAttribute('name', 'viewport');
		
		 head.appendChild(viewport);
		
		}
		
		
		viewport.setAttribute('content', viewportContent);
		
		
		function onResize() {
		
		 var widthToHeight = stageWidth / stageHeight;
		
		 var newWidth = window.innerWidth;
		
		 var newHeight = window.innerHeight;
		
		 var newWidthToHeight = newWidth / newHeight;
		
		 //
		
		 if (newWidthToHeight > widthToHeight) {
		
		 newWidth = newHeight * widthToHeight;
		
		 page_canvas.style.height = newHeight + "px";
		
		 page_canvas.style.width = newWidth + "px";
		
		 } else {
		
		 newHeight = newWidth / widthToHeight;
		
		 page_canvas.style.height = newHeight + "px";
		
		 page_canvas.style.width = newWidth + "px";
		
		 }
		
		 scale = newWidthToHeight / widthToHeight;
		
		 stage.width = newWidth;
		
		 stage.height = newHeight;
		
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		
		}
		
		
		window.onresize = function () {
		
		 onResize();
		
		}
		
		
		onResize();
		
		//Get numbers for minutes and seconds of total time (current time code is in Time layer)
		var totalTime;
		var totalSeconds = Math.round(this.totalFrames/30);
		var totalMinutes = 0;
		while((totalSeconds)>59) {
			totalMinutes++;
			totalSeconds -= 60;
		}
		//Adjust string to ensure 3 digits are always displayed
		if(totalSeconds<10){
			totalTime = totalMinutes + ":0" + totalSeconds;
		} else {
			totalTime = totalMinutes + ":" + totalSeconds;
		}
		this.totalTime.text = totalTime;
		
		//video element
		var video = document.createElement("video");
		video.src = "100000_en_18_v_qtp.mp4"; //be sure to update this
		video.autoplay = true;
		video.muted = true;
		//Draw video on canvas unless the video has ended
		function playVideo(){
			if (video.ended == false){
				ctx.drawImage(video, 88, 50, 1224, 693);
				requestAnimationFrame(playVideo);
			}
		}
		var ctx = canvas.getContext('2d');
		playVideo();
		
		
		
		//Progress bar & scrubber
		var scrubberStart = 403;
		var barWidth = 595;
		var isDragging = false;
		var proportion;
		//Position the scrubber, handle press/release events for scrubber
		this.addEventListener("tick", fl_MouseClickHandler.bind(this));
		function fl_MouseClickHandler()
		{
			if(isDragging == false){
				proportion = this.currentFrame/this.totalFrames;
				if(Math.round(this.currentFrame/30) % 1 == 0){ 
					audioSync(proportion);
					//audioInstance.currentTime = video.currentTime;
				}
				this.scrubber.x = scrubberStart + (proportion * barWidth);
			}
			else {
				if (stage.mouseX > scrubberStart && stage.mouseX < (scrubberStart + barWidth)) {
					proportion = (stage.mouseX-scrubberStart)/barWidth;
					this.scrubber.x = stage.mouseX;			
				}
			}
			
		}
		this.scrubber.addEventListener("pressmove", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2()
		{
			isDragging = true;
			audioInstance.paused = true;
			video.pause();
			this.gotoAndStop(Math.round(proportion * this.totalFrames));
			video.currentTime = proportion * video.duration;
			this.currentTime.play();
			
		}
		this.scrubber.addEventListener("pressup", fl_MouseClickHandler_3.bind(this));
		function fl_MouseClickHandler_3()
		{
			isDragging = false;
			audioInstance.setPosition(proportion * audioInstance.duration);
			audioInstance.play();
			this.gotoAndPlay(Math.round(proportion * this.totalFrames));
			//set video position
			video.currentTime = proportion * video.duration;
			audioInstance.currentTime = video.currentTime;
			video.play();
			video.muted = true;
			this.playButton.visible = false;
			this.pauseButton.visible = true;
			this.currentTime.play();
		}
		//Clicking on progress bar will play animation from that point
		this.progressBar.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		function fl_MouseClickHandler_4()
		{
			proportion = (stage.mouseX-scrubberStart)/barWidth;
			audioInstance.setPosition(proportion * audioInstance.duration);
			audioInstance.play();
			this.gotoAndPlay(Math.round(proportion * this.totalFrames));
			video.currentTime = proportion * video.duration;
			audioInstance.currentTime = video.currentTime;
			video.play();
			video.muted = true;
			this.playButton.visible = false;
			this.pauseButton.visible = true;
			this.currentTime.play();
		}
		
		//Play/pause buttons
		this.playButton.visible = false;
		this.playButton.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		this.pauseButton.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		function fl_MouseClickHandler_5()
		{
			this.paused = false;
			audioInstance.paused = false;
			audioInstance.currentTime = video.currentTime;
			video.play();
			this.currentTime.paused = false;
			this.playButton.visible = false;
			this.pauseButton.visible = true;
		}
		function fl_MouseClickHandler_6()
		{
			this.paused = true;
			audioInstance.paused = true;
			video.pause();
			this.currentTime.paused = true;
			this.playButton.visible = true;
			this.pauseButton.visible = false;
		}
		
		//syncs audio to the video and frame animation
		function audioSync(p){
			audioInstance.setPosition(p * audioInstance.duration); 
		}
		
		
		//Create sound instance (rest of code generated by Animate in .js file)
		var audioInstance =
		playSound("slide_18wav");
	}
	this.frame_3239 = function() {
		this.currentTime.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3239).call(this.frame_3239).wait(1));

	// Play Button
	this.playButton = new lib.playButtonSymbol();
	this.playButton.setTransform(375.2,773.9,0.144,0.13);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.playButtonSymbol(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(3240));

	// Pause Button
	this.pauseButton = new lib.pauseButtonSymbol();
	this.pauseButton.setTransform(372.1,773,0.219,0.233);
	new cjs.ButtonHelper(this.pauseButton, 0, 1, 2, false, new lib.pauseButtonSymbol(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pauseButton).wait(3240));

	// Scrubber
	this.scrubber = new lib.scrubberSymbol();
	this.scrubber.setTransform(412.3,774.3,0.406,0.406,0,0,0,21.7,24.8);
	new cjs.ButtonHelper(this.scrubber, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.scrubber).wait(3240));

	// Progress Bar
	this.progressBar = new lib.progressSliderSymbol();
	this.progressBar.setTransform(702.5,773.6,0.908,0.572,0,180,0,9.8,8.1);

	this.timeline.addTween(cjs.Tween.get(this.progressBar).wait(3240));

	// Time
	this.totalTime = new cjs.Text("0:00", "14px 'Arial'", "#333333");
	this.totalTime.name = "totalTime";
	this.totalTime.lineHeight = 18;
	this.totalTime.lineWidth = 29;
	this.totalTime.setTransform(1071.7,764);

	this.text = new cjs.Text("| ", "14px 'Arial'", "#333333");
	this.text.lineHeight = 18;
	this.text.lineWidth = 6;
	this.text.setTransform(1064.5,763);

	this.currentTime = new lib.currentTime();
	this.currentTime.setTransform(934,773.9,1,1,0,0,0,49,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.currentTime},{t:this.text},{t:this.totalTime}]}).wait(3240));

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525252").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape.setTransform(714.6,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525252").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_1.setTransform(706,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525252").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_2.setTransform(700.7,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525252").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_3.setTransform(695.1,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525252").s().p("AgJBOIAAiJIg0AAIAAgSIB7AAIAAASIg0AAIAACJg");
	this.shape_4.setTransform(686,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3240));

	// Border
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5F5F5").s().p("EhtXACVIAAkqMDavAAAIAAEqg");
	this.shape_5.setTransform(700,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(3240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(700,396.5,1400,784.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;