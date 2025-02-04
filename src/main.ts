import './style.css'
import { setupCounter } from './counter.ts'
import Game from './ts/game.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <header class="text-3xl "></header>
    <main class="flex items-center w-screen h-screen justify-center font-mono">
        <div class="w-[500px] h-[548px] shadow-1 border-1 rounded-[10px]">
            <div id="board-top" class="rounded-t-[10px]  h-[24px] pl-[5px] flex justify-between w-full text-sm text-white bg-gray-800">
                <div class="flex items-center">
                    <span id="White-turn" class="h-[15px] w-[15px] rounded-full bg-white"></span>
                    <p class="ml-[5px] text-sm uppercase "> Noir : <span id="white-score">12</span> pions</p>
                </div>
                <div class="reflexion mr-[8px]">00:00:00</div>
            </div>
            <div id="board" class="grid grid-rows-10 w-[500px] h-[500px] grid-rows-10">
                
            </div>
            <div id="board-bottom" class="rounded-b-[10px]  h-[24px] pl-[5px] flex justify-between w-full text-sm text-white bg-gray-800">
                <div class="flex items-center">
                    <span id="White-turn" class="h-[15px] w-[15px] rounded-full bg-green-500 ring"></span>
                    <p class="ml-[5px] text-sm uppercase "> Blanc : <span id="white-score">12</span> pions</p>
                </div>
                <div class="reflexion mr-[8px]">00:00:00</div>
            </div>
        </div>
            
        </div>


    </main>
    <footer class=""></footer>
  </div>
`

new Game()