import{t as e,i,c as l,L as s,a,s as t,R as d,b as c,r as v,d as r}from"./vendor.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&i(e)})).observe(document,{childList:!0,subtree:!0})}function i(e){if(e.ep)return;e.ep=!0;const i=function(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?i.credentials="include":"anonymous"===e.crossorigin?i.credentials="omit":i.credentials="same-origin",i}(e);fetch(e.href,i)}}();const o=e('<div class="App"><header class="Header"><div class="Header_logo">BE</div><div class="Header_score">Ethos: 0.00 Bit: 0.00 </div><div class="Header_auth AuthLinks"></div></header><div class="Game"><div class="Game_text">SOCIAL ETHEREUM GAMBLING</div><div class="Game_graphic"><svg fill="white" width="300px" height="180px"><linearGradient id="linear-gradient"><stop offset="0%" stop-color="gold"></stop><stop offset="100%" stop-color="teal"></stop></linearGradient><rect fill="url(#linear-gradient)" width="100%" height="100%"></rect></svg></div><div class="Game_value">36.32x</div><div class="Game_history GameHistory"><div class="GameHistory_item --loose">1.19x</div><div class="GameHistory_item --loose">1.01x</div><div class="GameHistory_item --win">3.02x</div><div class="GameHistory_item --loose">1.09x</div><div class="GameHistory_item --loose">1.2x</div><div class="GameHistory_item --win">3.13x</div></div><div class="Game_button"><button class="Button">Login to play</button></div><div class="Game_link"><a class="Link">or register</a></div></div><div class="Bet"><div class="Bet_line BetInput"><div class="BetInput_label">Bet</div><input class="BetInput_input" value="1"><button class="BetInput_button">x2</button><button class="BetInput_button">/2</button><button class="BetInput_switch">Eth</button><button class="BetInput_switch --active">Bit</button></div><div class="Bet_line BetInput"><div class="BetInput_label">Auto Cash Out</div><input class="BetInput_input" type="numeric" value="4.0"><div class="BetInput_label">x</div></div><div class="Bet_line BetRun"><div class="BetRun_statistics BetRunStatistics"><div class="BetRunStatistics_name">Target Profit:</div><div class="BetRunStatistics_value">0.0002 BTC</div><div class="BetRunStatistics_name">Win Chance:</div><div class="BetRunStatistics_value">49.5%</div></div><button class="BetRun_button">BET</button></div></div><div class="TabLine"><div class="TabLine_item --active">Players</div><div class="TabLine_item">Chat</div><div class="TabLine_item">History</div></div><div class="TabContent --active"><div class="Table --players"><div class="Table_cell --header">User</div><div class="Table_cell --header">@</div><div class="Table_cell --header">Bet</div><div class="Table_cell --header">Profit</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div><div class="Table_cell">rakshop</div><div class="Table_cell">45</div><div class="Table_cell">31</div><div class="Table_cell">-</div></div></div><div class="TabContent">chat</div><div class="TabContent">history</div><div class="Statistics"><div class="Statistics_item StatisticsItem --home"><div class="StatisticsItem_name">Median</div><div class="StatisticsItem_value">1.97x</div></div><div class="Statistics_item StatisticsItem --bankroll"><div class="StatisticsItem_name">Bankroll</div><div class="StatisticsItem_value">Ξ 336</div></div><div class="Statistics_item StatisticsItem --maxProfit"><div class="StatisticsItem_name">Max profit</div><div class="StatisticsItem_value">Ξ 3.36</div></div><div class="Statistics_item StatisticsItem --maxBet"><div class="StatisticsItem_name">Max Bet</div><div class="StatisticsItem_value">Ξ 1</div></div></div><div class="Article"><div class="Article_header">What is EtherCrash?</div><div class="Article_text">Ethercrash.io is the most established and largest gambling game for Ethereum. Based on Bustabit and provably fair with a low house edge. You can deposit with either Bitcoin or Ethereum, give it a try today!</div></div><div class="Article --negative"><div class="Article_header --negative">Provably Fair</div><div class="Article_text --negative">EtherCrash\'s outcome can be proven as fair. There are third party scripts you can use to verify the game hashes and calculate the results.</div></div><div class="Article"><div class="Article_header">How it Works:</div><div class="Article_text">Every game starts from 0x and counts up, you can watch your wager amount being multiplied in your bet area and choose to cash out at anytime but beware if you wait too long it can crash and you will lose your entire bet.</div></div><div class="Article --negative"><div class="Article_header --negative">Be the Bankroll.</div><div class="Article_text --negative">Increase your Ethereum holdings by investing into the bankroll of Ethercrash. By being part of the growing bankroll you can monitor your investment and see its growth or decline whenever you choose. By investing you ensure we can also have a higher max bet limit. The bankroll is used for paying out players who want to withdraw their winnings. Invest into Ethercrash today and see your money grow!</div></div><div class="Leaderboard"><div class="Leaderboard_header">Leaderboard</div><div class="Leaderboard_table"><div class="Leaderboard_cell">#</div><div class="Leaderboard_cell">Name</div><div class="Leaderboard_cell">Profit</div><div class="Leaderboard_cell">1</div><div class="Leaderboard_cell">Blowme</div><div class="Leaderboard_cell">1,303.95&nbsp;ETH</div><div class="Leaderboard_cell">2</div><div class="Leaderboard_cell">Jdmdbdb</div><div class="Leaderboard_cell">500.00&nbsp;ETH</div><div class="Leaderboard_cell">3</div><div class="Leaderboard_cell">ColdNeffex2</div><div class="Leaderboard_cell">418.20&nbsp;ETH</div><div class="Leaderboard_cell">4</div><div class="Leaderboard_cell">Triceratops</div><div class="Leaderboard_cell">361.12&nbsp;ETH</div><div class="Leaderboard_cell">5</div><div class="Leaderboard_cell">Sanjeetsir</div><div class="Leaderboard_cell">332.55&nbsp;ETH</div></div></div><div class="Copyright">ethercrash.io - game concept originally by bustabit.</div></div>'),n=e('<svg><line stroke="white"></line></svg>',4,!0);let _=()=>{let e=[];for(let i=0;i<2;i+=.2){let l=i+.2;e.push({x1:10*i,y1:Math.pow(2,i)-1,x2:10*l,y2:Math.pow(2,l)-1})}let d=Math.max(25,e[e.length-1].x1),c=Math.max(5,e[e.length-1].y1),v=e=>e/d*300,r=e=>180-e/c*180;return(()=>{const d=o.cloneNode(!0),c=d.firstChild,_=c.firstChild.nextSibling.nextSibling,b=c.nextSibling.firstChild.nextSibling.firstChild;return b.firstChild.nextSibling,i(_,l(s,{class:"AuthLinks_link",href:"/game",children:"Tinenmi"})),i(b,(()=>e.map((e=>(()=>{const i=n.cloneNode(!0);return a((l=>{const s=v(e.x1),a=r(e.y1),d=v(e.x2),c=r(e.y2);return s!==l._v$&&t(i,"x1",l._v$=s),a!==l._v$2&&t(i,"y1",l._v$2=a),d!==l._v$3&&t(i,"x2",l._v$3=d),c!==l._v$4&&t(i,"y2",l._v$4=c),l}),{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),i})()))),null),d})()};const b=e("<div></div>");let u=()=>b.cloneNode(!0),h=()=>l(c,{get children(){return[l(d,{path:"/game",get element(){return l(u,{})}}),l(d,{path:"/",get element(){return l(_,{})}})]}});v((()=>l(r,{get children(){return l(h,{})}})),document.getElementById("root"));
