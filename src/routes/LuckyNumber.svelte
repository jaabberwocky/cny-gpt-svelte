<script lang="ts">
	// @ts-nocheck
	const totalDelay = 3000;
	var numberSpin = function (selector) {
		var element = document.getElementById(selector);
		var factor = 10 + Math.floor(Math.random() * 10);
		var num = 10;
		var section = 100 / (num + 1);
		var stopValue = 1;
		var spin = function (flag, x) {
			var value = element.style.transform;
			value = value ? parseFloat(value.split('(')[1].split(')').join('')) : 0;
			if (flag && flag == true) {
				if (
					stopValue != 1 &&
					(value <= stopValue || value - section / factor <= stopValue) &&
					typeof x != 'undefined' &&
					value >= x * -section &&
					value <= (x - 0.5 >= 0 ? x - 0.5 : stopValue == 0 ? 0 : 0.5) * -section
				) {
					element.style.transform = 'translateY(' + stopValue + '%)';
					stopValue = 1;
					return true;
				}
				stopValue = Math.floor(value / section) >= -num ? Math.floor(value / section) * section : 0;
			}
			if (value && value <= -(section * num)) {
				element.style.transform = 'translateY(' + section + '%)';
				value = 0;
			} else {
				value -= section / factor;
			}
			element.style.transform = 'translateY(' + value + '%)';
			return false;
		};
		var spinTimer = setInterval(spin, 10);
		function stop(delay, x) {
			setTimeout(function () {
				clearTimeout(spinTimer);
				var stopTimer = setInterval(function () {
					if (spin(true, x)) {
						clearInterval(stopTimer);
					}
				}, 10);
			}, delay);
		}
		return {
			stop: function (delay, x) {
				return stop(delay, x);
			}
		};
	};

	function handleClick() {
		numberSpin('scroll1').stop(totalDelay + 100 + Math.floor(Math.random() * 100), num[0]);
		numberSpin('scroll2').stop(totalDelay + 200 + Math.floor(Math.random() * 100), num[1]);
		numberSpin('scroll3').stop(totalDelay + 300 + Math.floor(Math.random() * 100), num[2]);
		numberSpin('scroll4').stop(totalDelay + 400 + Math.floor(Math.random() * 100), num[3]);
	}

	export let num: string;

	$: if (num.length > 0) {
		handleClick();
	}
</script>

<br />
<div class="lucky-number">
	<h1>Lucky Number</h1>
	<div class="slotcontainer">
		<div class="slot">
			<div id="scroll1">
				<div>0</div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
				<div>0</div>
			</div>
		</div>
		<div class="slot">
			<div id="scroll2">
				<div>0</div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
				<div>0</div>
			</div>
		</div>
		<div class="slot">
			<div id="scroll3">
				<div>0</div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
				<div>0</div>
			</div>
		</div>
		<div class="slot">
			<div id="scroll4">
				<div>0</div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
				<div>0</div>
			</div>
		</div>
	</div>
</div>

<style>
	.slotcontainer {
		text-align: center;
		font-size: 0;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.slot {
		display: inline-block;
		width: 35px;
		height: 50px;
		border: 0.5px solid;
		text-align: center;
		font-size: 30px;
		font-family: verdana;
		overflow: hidden;
	}

	.lucky-number {
		background-color: #f77e2150;
	}
</style>
