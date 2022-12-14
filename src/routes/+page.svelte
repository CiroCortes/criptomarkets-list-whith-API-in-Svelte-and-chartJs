<script>
	
	import { coinGecko } from '../stores/coinstore';

	let titles = ['#', 'Coin', 'Price', 'Price Change %', '24h volume'];

	let filteredCoin = [];

	let searchCoins = '';

	$: {
		//console.log(searchCoins);
		if (searchCoins) {
			filteredCoin = $coinGecko.filter((coins) =>
				coins.name.toLowerCase().includes(searchCoins.toLocaleLowerCase())
			);
		} else {
			filteredCoin = [...$coinGecko];
		}
	}
</script>



<div class="p-11 h-screen">
    <div class="p-1">
        <input class="p-1 w-full border-blue-700 border-2  " type="text" placeholder="Search Your Coins...." bind:value={searchCoins} />

    </div>

    
	<br />
	<table class="w-full rounded-sm">
		<thead class="p-3 bg-gray-700 border-b-5 border-gray-50 ">
			<tr>
				{#each titles as title}
					<th class=" w-4 p-2 text-sm font-semibold tracking-wide text-left">
						{title}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody class="p-3 divide-y divide-gray-100  ">
			{#each filteredCoin as coins, i}
				<tr class="bg-gray-800 hover:bg-gray-500">
					<td class="p-3 w-4 text-sm text-gray-700 text-white">{i + 1}</td>

					<td class="p-3 text-sm text-gray-700 text-white flex flex-row">
						<img class="w-4" src={coins.image} alt="" />
						<!-- //<span class="pl-2">{coins.name}</span> -->
						<a class="pl-2" href="/{coins.id}"> {coins.name} </a> 
						<span class="pl-2">{coins.symbol}</span>
					</td>
					<td class="p-3 text-sm text-gray-700 text-white">${coins.current_price.toLocaleString()}</td>
                   
                    <td class={
                        coins.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"
                    }>{coins.price_change_percentage_24h} %</td>
                    
					
					<td class="p-3 text-sm text-gray-700 text-white">{coins.total_volume.toLocaleString()} %</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
