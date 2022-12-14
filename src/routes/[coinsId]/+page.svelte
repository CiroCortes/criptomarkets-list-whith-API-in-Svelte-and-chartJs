<script>
	export let data;
	import { onMount } from 'svelte';
	import moment from 'moment';

	import chartjs from 'chart.js/auto';

	let gf = '';

	const { coinDetail } = data;
	gf = coinDetail.id;

	var coinCharDtaFech = [];
	let ctx;
	let chartCanvas;

	onMount(async () => {
		await grafico();

		ctx = chartCanvas.getContext('2d');
		var chart = new chartjs(ctx, {
			type: 'line',

			data: {
				labels: coinCharDtaFech.map((val) => moment(val.x).format('MMM DD')),
				datasets: [
					{
						label: gf,
						
						data: coinCharDtaFech.map((value) => value.y),
						backgroundColor: 'rgba(2,180,215,0.3)',
						borderColor: 'rgba(2,159,64,2)',
						borderWidth: 1,
						tension: 1,
						pointRadius: 1,
						fill: true
					}
				]
			},
			options: {
				responsive: true,
				scales: {
					x: {
												
						grid: { display: false },
						ticks:{
							color:'rgba(2,159,64,2)'

						}

					},
					y:{
						ticks:{
							color:'rgba(2,159,64,2)'

						}
					}
				}
			}
		});
	});

	// fetch data from coingecko

	const grafico = async () => {
		const ides = gf;
		const res = await fetch(
			`https://api.coingecko.com/api/v3/coins/${ides}/market_chart?vs_currency=usd&days=30&interval=monthly`
		);
		const priceData = await res.json();
		const coinFech = priceData.prices.map((value) => ({
			x: value[0],
			y: value[1].toFixed(2)
		}));

		coinCharDtaFech = coinFech;
		//console.log(coinCharDtaFech);
	};
	grafico();
</script>

<div class="container p-5">
	<canvas bind:this={chartCanvas} id="myChart" width="300" height="100" />
</div>

<div class="container p-2">
	<div class="p-2 container flex items-end">
		<div>
			<img class="w-20" src={coinDetail.image.large} alt={coinDetail.image} />
		</div>
		<div class="items-end">
			<p class="ml-3 text-gray-300 ">{coinDetail.name} ({coinDetail.symbol})</p>
		</div>
	</div>

	<br>

	<h1 class="p-6 text-gray-300">Official site :
		<a class="hover:text-green-50" href= {coinDetail.links.homepage}>  {coinDetail.links.homepage}</a>
		   </h1>
	<br>

	<div class="p-6">
		<p class="text-gray-300">{coinDetail.description.en}</p>
	</div>
</div>
