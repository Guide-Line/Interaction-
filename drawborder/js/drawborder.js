(function ( window, document, undefined ) {
	    /*!
	     * drawBorder - �׵θ� �׸��� ȿ�� �÷�����
	     * @param {object} opt
	     * @returns {object}
	     */
	    var comm = {},
	        drawBorder = {} ,
	        DrawBorder = {} ,
	        isIE = navigator.userAgent.indexOf('MSIE') > 0;
		    DrawBorder = (function WrapFn(option) {
		        var tag = {}, opt = {};
		        function BorderWrap(option) {
		            (function objSet() {
		                opt.speed = 300;
		                opt.targetName = option.targetName;
		                opt.className = option.className;
		                tag.mother = opt.targetName;
		                tag.elm = document.createElement("span");
		                tag.borderArr = [
		                    opt.className + " " + opt.className + "-top",
		                    opt.className + " " + opt.className + "-right",
		                    opt.className + " " + opt.className + "-bottom",
		                    opt.className + " " + opt.className + "-left",
		                ];
		                tag.elmClone = null;
		                tag.span = null;
		            }());
		            (function prepareSet(){
		                tag.borderArr.forEach(function (obj, idx) {
		                    tag.elmClone = tag.elm.cloneNode();
		                    tag.elmClone.className = tag.borderArr[idx];
		                    tag.mother.appendChild(tag.elmClone);
		                    tag.mother.className = "move";
		                });
		            }());
		            (function eventSet() {
		                tag.mother.addEventListener('mouseenter', evtHandler);
		            }());
		        }
		        // �̺�Ʈ �ڵ鷯 �߰�
		        function evtHandler() {
		            // console.log( this );
		        }
		        return BorderWrap;
		    }());
		    /* ��Ƽ �̺�Ʈ ������ */
		    comm.addEvent = function (obj , evts , handler) {
		        if (!isIE) {
		            var evts = evts.split(' ');
		            [].forEach.call(evts , function (evt) {
		                obj.addEventListener(evt , handler , false);
		            });
		        } else {
		            var evts = evts.split(' ');
		            obj.attachEvent('on' + evts, handler , false);
		        }
		    };
		    comm.addEvent (window , 'load' , function (){
		        var elm = document.querySelector(".lineEffect"),
		            targetElement = elm.querySelectorAll("li");
		        [].forEach.call(targetElement , function (target){
		            drawBorder = new DrawBorder({
		                targetName : target,
		                className  : "drawborder"
		            });
		        });
		    });
		    
		    
		     comm.addEvent (window , 'load' , function (){
		        var elm = document.querySelector(".lineEffect2"),
		            targetElement = elm.querySelectorAll("li");
		
		        [].forEach.call(targetElement , function (target){
		            drawBorder = new DrawBorder({
		                targetName : target,
		                className  : "drawborder2"
		            });
		        });
		    });
		    
		    
	}( this, this.document ));