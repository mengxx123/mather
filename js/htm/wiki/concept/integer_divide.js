/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */


wiki['Integer Divide']=detail('整除的快速判别法 '+ksc('k|m=□10^n+□10^{n-1}+□10^{n-2}+⋯+□10^2+□10+□'),
		Table([['除数k','k|m的充要条件']],[
			[2,['10=5×2 即2|末位='+kmod('0,2,4,6,8',0,2)].join(hr)],
			[3,['10=3×3+1 即3|□+□+□+⋯+□+□+□',ol([
				'模3剩余类[0]：'+kmod('0,3,6,9',0,3)+',[1]：'+kmod('1,4,7',1,3)+',[2]：'+kmod('2,5,8',2,3),
				'系数□去掉剩余类[0]',
				'系数□成对去掉互余剩余类[1,2]',
				'系数□去掉3倍数个同剩余类数[1]或[2]',
				'最后系数□被全部去掉，则3|m',
				'综上所述，系数□中，剩余类[1]，[2]集合势差，是3的倍数，则3|m',
				'也即，系数□中3| |[1]|-|[2]|',
				'也即，系数□中'+kmod('|[1]|','|[2]|',3)
				])].join(hr)],
			[4,['100=25×4 即4|末2位数',
				'100=25×4，10=4×2+2 即4|□2+□ 也即2|□+□/2',
				'次末位与末位/2 同奇偶',
				'次末位∈[0] (mod 2) 且末位∈[0] (mod 4) 或'+br+'次末位∈[1] (mod 2) 且末位∈[2] (mod 4) ',
				'次末位∈[0,2] 且末位∈[0] (mod 4) 或'+br+'次末位∈[1,3] 且末位∈[2] (mod 4) ',
				'相当于满足同余方程'+kmod('[x]2+[y]',0,4),
				].join(hr)],
			[5,['10=2×5 即5|末位='+kmod('0,5',0,5)].join(hr)],
			[6,['6=2×3 即需同时满足2，3|m',
				'10=6+4 即6|□4^n+□4^{n-1}+□4^{n-2}+⋯+□4^2+□4+□'+br+
				'也即2|末位 且3|□□□⋯□□□（根据4=3+1）',
			
				'10=2×6-2 （基本同上）'


				].join(hr)],

			[7,['1000=13×11×7-1，'+'10^n'+'=13×11×7×10^{n-3}-10^{n-3} 即7|-□□□⋯+□□□'+br+
				kmod('10^n','-10^{n-3}',7)+' 即从末位往前，每3位截取，并变号，7|计算结果',
				'100=14×7+2，10=7+3，即7|-□□□⋯+□2+□3+□',
				'也即 7|⋯+□2+□3+□-□2-□3-□+□2+□3+□',ol([
				'模7剩余类[0]：'+kmod('0,7',0,7)+',[1]：'+kmod('1,8',1,7)+',[2]：'+kmod('2,9',2,7)+',[3],[4],[5],[6]',
				'系数□去掉剩余类[0]：'+kmod('0,7',0,7),
				'相同代数系数（区别正负符号）的系数□成对去掉互余剩余类[1,6]，[2,5]，[3,4]',
				'相同代数系数的系数□去掉7倍数个同剩余类数[1]，[2]，[3]，⋯，或[6]',
				'相反代数系数的系数□成对去掉相同数',
				'相反代数系数的系数□成对去掉同剩余类数[1]，[2]，[3]，⋯，或[6]',


				'7=2×2+3=2×3+1=3×2+1 同号代数系数的系数□成组去掉[2]2+[1]3 或 [2]3+[1] 或 [3]2+[1]',

				'7=4×2-1=3×3-2=5×2-3=6×2-5=4×3-5  异号代数系数的系数□'+br+'成组去掉[4]2-[1] 或 [3]3-[2] 或 [5]2-[3] 或 [6]2-[5] 或 [4]3-[5]',
					
				'7=5×3-[1]=8×2-[2]  异号代数系数的系数□成组去掉[5]3-[1] 或 [1]2-[2]',
					
				'相当于满足同余方程'+kmod('[x]2+[y]3+[z]',0,7),
				
				'7|计算结果',

				]),ol([
					kfrac([1,7])+'=0.142；857 余数分别是132；6（-1）45',
					'即7|⋯⋯+□□□□□□+□□□□□□ （每6位一截）',
					'系数去掉7，成对的同位互余剩余类，7倍数个同位相同数',
					'同位分别求和再求余',
				])].join(hr)],
					
			[8,['1000=125×8 即8|末3位数□□□',
				'100=12×8+4，10=8+2 即8|□4+□2+□',
				'相当于满足同余方程'+kmod('[x]4+[y]2+[z]',0,8),
			

				].join(hr)],
			[9,['10=9+1 即9|□+□+□+⋯+□+□+□',ol([
				'模9剩余类[0]：'+kmod('0,9',0,9)+',[1],[2],⋯,[8]',
				'系数□去掉剩余类[0]',
				'系数□成对去掉互余剩余类[1,8], [2,7], [3,6], [4,5]',
				'系数□去掉9倍数个同剩余类数[1],[2],⋯,或[8]',
				'9|计算结果',
				])].join(hr)],
			[10,['10|末位='+kmod(0,0,10)].join(hr)],

			[11,['10=11-1，'+'10^n'+'=11×10^{n-1}-10^{n-1} 即11|⋯+□-□+□',
				'1000=13×7×11-1，'+'10^n'+'=10^{n-3}(11×91-1)'+br+
				kmod('10^n','-10^{n-3}',11)+' 即从末位往前，每3位截取，并变号，11|计算结果',ol([
				'奇偶位数的系数□成对去掉相同数',
				'同奇同偶位，去掉11倍数个相同数',
				'奇位数之和，与偶位数之和，相减',
				'11|计算结果',
				]),ol([
					kfrac([1,11])+'=0.0；9 余数分别是1；10（-1）',
					'即11|⋯⋯+□□+□□ （每2位一截）',
					'系数去掉，成对的同位互余剩余类，11倍数个同位相同数',
					'同位分别求和再求余',
				])].join(hr)],

			[12,['12=2×2×3 即需同时满足4，3|m',
				'10=12-2 即12|□(-2)^n+□(-2)^{n-1}+□(-2)^{n-2}+⋯+□(-2)^2+□(-2)+□',
				].join(hr)],


			[13,['1000=11×7×13-1，'+'10^n'+'=11×7×13×10^{n-3}-10^{n-3} 即13|-□□□⋯+□□□'+br+
				kmod('10^n','-10^{n-3}',13)+' 即从末位往前，每3位截取，并变号，13|计算结果',
				'100=13×8-4，10=13-3，即13|-□□□⋯+□(-4)+□(-3)+□',
				'也即 13|⋯-□4-□3+□+□4+□3-□-□4-□3+□',ol([
				'模13剩余类[0],[1],⋯,[9]',
				'系数□去掉剩余类[0]',
				'相同代数系数（区别正负符号）的系数□成对去掉互余剩余类[4,9]，[5,8]，[6,7]',
				'相同代数系数的系数□去掉13倍数个同剩余类数[1]，[2]，[3]，⋯，或[9]',
				'相反代数系数的系数□成对去掉相同数',

				'相当于满足同余方程'+kmod('[x](-4)+[y](-3)+[z]',0,13),
				
				'13|计算结果',
				]),ol([
					kfrac([1,13])+'=0.076；923 余数分别是1 10 9；12（-1） 3 4',
					'即13|⋯⋯+□□□□□□+□□□□□□ （每6位一截）',
					'系数去掉，成对的同位互余剩余类，13倍数个同位相同数',
					'同位分别求和再求余',
				])].join(hr)],

			[14,['14=7×2 即需同时满足2，7|m',
				'100=7×14+2 即14|□2^n+□2^{n-1}+□2^{n-2}+⋯+□4+□2+□',
				].join(hr)],


			[15,['15=3×5 即需同时满足3，5|m',
				'100=6×15+10, 1000=66×15+10, 10000=666×15+10 即15|(□+⋯+□)10+□'+br+
				kmod('10^n',10,15)+' 其中n>0 即从末位往前，各位数求和然后乘以10，加上末位数，15|计算结果',

				'100=6×15+10, 1000=60×15+100, 10000=600×15+1000 即15|(□⋯□)10+□=m'+br+
				kmod('10^n','10^{n-1}',15)+' 其中n>1 此方法无实际用途',
				
				
				
				].join(hr)],
					
			[16,['10000=5^4×16 即16|末4位数□□□□',
				'1000=62×16+8, 100=6×16+4 即16|□8+□4+□2+□',
				'相当于满足同余方程'+kmod('[w]8+[x]4+[y]2+[z]',0,16),
			

				].join(hr)],

			[17,['1000=59×17-3，10000=588×17+4, 100000=5882×17+6, 1000000=58823×17+9, 10000000=588235×17+5, 100000000=5882353×17-1'
					,ol([
					kfrac([1,17])+'=0.05882352；94117647 余数分别是1 10 15 14 4 6 9 5；16（-1） 7 2 3 13 11 8 12',
					'即17|⋯⋯+□⋯□+□⋯□ （每16位一截）',
					'系数去掉，成对的同位互余剩余类，17倍数个同位相同数',
					'同位分别求和再求余',
				])].join(hr)],


			[19,[ol([
					kfrac([1,19])+'=0.052631578；947368421 余数分别是1 10 5 12 6 3 11 15 17；18（-1） 9 14 7 13 16 8 4 2',
					'即19|⋯⋯+□⋯□+□⋯□ （每18位一截）',
					'系数去掉，19倍数个同位相同数',
					'同位分别求和再求余',
				])].join(hr)],

			[23,[ol([
					kfrac([1,23])+'=0.04347826086；95652173913 余数分别是1 10 8 11 18 19 6 14 2 16；22（-1） 13 15 12 5 4 17 9 21 7',
					'即23|⋯⋯+□⋯□+□⋯□ （每22位一截）',
					'系数去掉，23倍数个同位相同数',
					'同位分别求和再求余',
				])].join(hr)],

			[647,[ol([
					kfrac([1,647])+'=0.001545595054095826893353941267387944358578052550231839258 '+br+
					'余数分别是1 10 100 1000 353 295 362 385 615 327 35 350 265 62 620 377 535；646（-1） -10 ',
					'即647|⋯⋯+□⋯□+□⋯□ （每位一截）',
					'系数去掉，647倍数个同位相同数',
					'同位分别求和再求余',
				])].join(hr)],

			['素数p',[ol([
					kfrac([1,'p'])+'=0.0⋯ 余数分别是1 10 ⋯ t ⋯ p-1（-1）⋯ p-t（-t） ⋯'+br+
					'余数可以只算到1半（最多'+kfrac(['p-1',2])+'位），根据模p，写出另一半，减小计算量'+br+'原理参见：wikipedia'+
					ol(['设循环节是'+scit('xy')+'（x,y各占一半数字，长度都是l≤'+kfrac(['p-1',2])+'），p=2d+1',
					'根据等比求和公式，'+kfrac(['x10^{-l}+y10^{-2l}','1-10^{-2l}'])+' = '+kfrac([1,'p']),
					'(x10^l+y)p = 10^{2l}-1 = (10^l+1)(10^l-1)',
					'(x+y)p+(10^l-1)xp = (10^l+1)(10^l-1)',


					'另一方面，x+y = 10^l-1',
					'则 p(1+x) = 10^l+1',
					'得到一个因式分解公式，例如：'+br+
						'7(1+142) = 1001'+br+
						'23(1+4347826086) = 100000000001'
					]),
				
					'即p|⋯⋯+□⋯□+□⋯□ （每p-1位一截）',
					'系数去掉，p倍数个同位相同数',
					'同位分别求和再求余'
				]),
					ol(['如何求出循环节长度2l？',
					'找到1个最小的9⋯9（长度为2l），满足被p整除，则循环节长度是2l，且循环节是9⋯9/p',
					'也即等价于找最小的1⋯1（ 假设(p,9)=1 ）',
					'而对1⋯1因式分解，尾数只能是1×1×⋯×1，3×7，9×9'
				]),
					ol(['也即 系数□从十位向前，分别乘以余数数列（向量内积）求余',
					'用矩阵表示，余数向量A（1 10 ⋯ t ⋯ p-1（-1）⋯ p-t（-t） ⋯）, 系数向量B（个，十，百，千⋯位），'+kmod('AB^T',0,'p','','',''),
				]),
					ol(['设p位数是t，m从个位往前，每t位数，求模k同余',
					kmod('10^{st}','x^s','p','','','')+' 其中'+kmod('x','10^t','p','','',''),
					'用矩阵表示，余数向量A（1 10 ⋯ t ⋯ p-1（-1）⋯ p-t（-t） ⋯）, 系数向量B（个，十，百，千⋯位），'+kmod('AB^T',0,'p','','',''),
				]),
					'若p位数过亿时，'].join(hr)],
				
			],'TBrc wiki'))

		+detail('常用整除判断法',Table([['数m','m|n ⇔ m|n的下列值']],[
			['2、5','末位数'],
			['3、9','各位数和'],
			['4、25','末两位数'],
			['8、125','末三位数'],
			['16、625','末四位数'],
			['$2^n$、$5^n$','末n位数'],
			['7、11、13','末三位之前的数-末三位数\n【大割尾法】a*(7*11*13-1)+b → a-b\n推论：原数字后面接偶数个3位数字串，不改变整除性'],

			],'TBrc wiki'))

		+detail('常用素数整除判断法',Table([['素数p','p|n ⇔ p|n的下列值']],[
			[2,'末位（即0,2,4,6,8）'],
			[3,'数位和'],
			[5,'末位（即0,5）'],

			[7,'【割尾法1】a*(7+3)+b → 3a+b'],
			['','*2 = a*(7*3-1)+b*2  → a-2b'],
			['','*3 = a*(7*4+2)+b*3  → 2a+3b'],


			[7,'【割尾法2】a*(7*7+1)*2+b → 2a+b'],
			['','*2 = a*(7*29-3)+b*2 → 3a-2b'],
			['','*3 = a*(7*43-1)+b*3 → a-3b'],

			[11,'偶数位数和-奇数位数和\n10^n=(11-1)^n → (-1)^n'],
			[11,'【割尾法1】a*(11-1)+b → a-b'],

			[11,'【割尾法2】a*(11*9+1)+b → a+b'],

			[13,'【割尾法1】a*(13-3)+b → 3a-b'],
			['','*3 = a*(13*2+4)+b*3  → 4a+3b'],
			['','*4 = a*(13*3+1)+b*4  → a+4b'],
			['','*5 = a*(13*4-2)+b*5  → 2a-5b'],
			['','*6 = a*(13*5-5)+b*6  → 5a-6b'],

			[13,'【割尾法2】a*(13*8-4)+b → 4a-b'],
			['','*2 = a*(13*15+5)+b*2  → 5a+2b'],
			['','*3 = a*(13*23+1)+b*3  → a+3b'],
			['','*4 = a*(13*31-3)+b*4  → 3a-4b'],
			['','*5 = a*(13*38+6)+b*5  → 6a+5b'],
				

			['7、11、13','【割尾法3】a*(7*11*13-1)+b → a-b'],

			[17,'【割尾法1】a*(17-7)+b → 7a-b → 3a+2b'],
			['','*2 = a*(17+3)+b*2 → 3a+2b'],
			['','*3 = a*(17*2-4)+b*3 → 4a-3b'],
			['','*5 = a*(17*3-1)+b*5 → a-5b'],
			['','*7 = a*(17*4+2)+b*7 → 2a+7b'],
			['','*8 = a*(17*5-5)+b*8 → 5a-8b'],

			[17,'【割尾法2】a*(17*6-2)+b → 2a-b'],
			['','*5 = a*(17*29+7)+b*5  → 7a+5b'],
			['','*6 = a*(17*35+5)+b*6  → 5a+6b'],
			['','*7 = a*(17*41+3)+b*7  → 3a+7b'],
			['','*8 = a*(17*47+1)+b*8  → a+8b'],

			[17,'【割尾法3】a*(17*59-3)+b → 3a-b'],
			['','*3 = a*(17*176+8)+b*3 → 8a+3b'],
			['','*4 = a*(17*235+5)+b*4 → 5a+4b'],
			['','*5 = a*(17*294+2)+b*5 → 2a+5b'],
			['','*6 = a*(17*353-1)+b*6 → a-6b'],
			['','*7 = a*(17*412-4)+b*7 → 4a-7b'],
			['','*8 = a*(17*471-7)+b*8 → 7a-8b'],


			[19,'【割尾法1】a*(19-9)+b → 9a-b → a+2b'],
			['','*2 = a*(19+1)+b*2 → a+2b'],
			['','*3 = a*(19*2-8)+b*3 → 8a-3b'],
			['','*5 = a*(19*3-7)+b*5 → 7a-5b'],
			['','*7 = a*(19*4-6)+b*7 → 6a-7b'],
			['','*9 = a*(19*5-5)+b*9 → 5a-9b'],

			[19,'【割尾法2】a*(19+1)*5+b → 5a+b'],
			['','*2 = a*(19*11-9)+b*2 → 9a-2b'],
			['','*3 = a*(19*16-4)+b*3 → 4a-3b'],
			['','*4 = a*(19*21+1)+b*4 → a+4b'],
			['','*5 = a*(19*26+6)+b*5 → 6a+5b'],
			['','*7 = a*(19*37-3)+b*7 → 4a-7b'],
			['','*9 = a*(19*47+7)+b*9 → 7a+9b'],

			[19,'【割尾法3】a*(19*53-7)+b → 7a-b'],
			['','*2 = a*(19*105+5)+b*2 → 5a+2b'],
			['','*3 = a*(19*158-2)+b*3 → 2a-3b'],
			['','*4 = a*(19*211-9)+b*4 → 9a-4b'],
			['','*5 = a*(19*263+3)+b*5 → 3a+5b'],
			['','*7 = a*(19*368+8)+b*7 → 8a+7b'],
			['','*8 = a*(19*421+1)+b*8 → a+8b'],


			[23,'【割尾法1】*2 = a*(23-3)+b*2 → 3a-2b'],
			['','*3 = a*(23+7)+b*3 → 7a+3b'],
			['','*5 = a*(23*2+4)+b*5 → 4a+5b'],
			['','*7 = a*(23*3+1)+b*7 → a+7b'],
			['','*8 = a*(23*3+11)+b*8 → 11a+8b'],
			['','*9 = a*(23*4-2)+b*9 → 2a-9b'],
			['','*11 = a*(23*5-5)+b*11 → 5a-11b'],

			[29,'【割尾法1】*2 = a*(29-9)+b*2 → 9a-2b → a+3b'],

			[31,'【割尾法1】*3 = a*(31-1)+b*3 → a-3b'],

			[37,'【割尾法1】*3 = a*(37-7)+b*3 → 7a-3b → 3a+4b'],

			[41,'【割尾法1】*4 = a*(41-1)+b*4 → a-4b'],

			[43,'【割尾法1】*4 = a*(43-3)+b*4 → 3a-4b'],

			[47,'【割尾法1】*4 = a*(47-7)+b*4 → 7a-4b → 3a+5b'],

			[53,'【割尾法1】*5 = a*(53-3)+b*5 → 3a-5b'],

			[59,'【割尾法1】*5 = a*(59-9)+b*5 → 9a-5b → a+6b'],

			[61,'【割尾法1】*6 = a*(61-1)+b*6 → a-6b'],

			[67,'【割尾法1】*6 = a*(67-7)+b*6 → 7a-6b → 3a+7b'],

			[71,'【割尾法1】*7 = a*(71-1)+b*7 → a-7b'],

			[73,'【割尾法1】*7 = a*(73-3)+b*7 → 3a-7b'],

			[79,'【割尾法1】*7 = a*(79-9)+b*7 → 9a-7b → a+8b'],

			[83,'【割尾法1】*8 = a*(83-3)+b*8 → 3a-8b'],
				
			[89,'【割尾法1】*8 = a*(89-9)+b*8 → 9a-8b → a+9b'],
				
			[97,'【割尾法1】*9 = a*(97-7)+b*9 → 7a-9b → 3a+10b'],

			[[scit('st'),'其中(s,t)=1','t是个位数'].join(br),['【割尾法1】*s = a*('+scit('st')+'-t)+b*s → ta-sb',
					'特别地, s=1时，'+scit('1t')+' → ta-b',
					'特别地, t=1时，'+scit('s1')+' → a-sb',

					'特别地, s=t=1时，11 → a-b',
					'特别地, t=3时，'+scit('s3')+' → 3a-sb',
					'特别地, t>5时，ta-sb → (10-t)a+(s+1)b',
					'特别地, t=7时，'+scit('s7')+' → 3a+(s+1)b',
					'特别地, t=9时，'+scit('s9')+' → a+(s+1)b',

					Table([['t','判别式','s（只列出s是个位数的情况）']],[[1,'a-sb','1,3,4,6,7'],['3','3a-sb','1,2,4,5,7,8'],['7','3a+(s+1)b','1,3,4,6,9'],['9','a+(s+1)b','1,2,5,7,8']],'TBrc'),
					
					'当s已知时，对上述4个判别式中作素数判断或因式分解，则',
					'推论1：如有素数，则此素数是一个真因子，从而n不是素数',
					'推论2：如无素数，且因式分解其中1个式子（发现有因子末位数正好等于相应的t），',
					'则此因子是一个真因子，从而n不是素数',
					'推论3：如无素数，且因式分解后（发现没有因子末位数正好等于相应的t），则n是素数',
						].join(br)],

			[101,'【割尾法2】a*(101-1)+b → a-b'],
			[103,'【割尾法2】a*(103-3)+b → 3a-b'],
			[107,'【割尾法2】a*(107-7)+b → 7a-b'],
			[109,'【割尾法2】a*(109-9)+b → 9a-b'],

			[113,'【割尾法2】a*(113-13)+b → 13a-b'],
			[127,'【割尾法2】a*(127-27)+b → 27a-b'],
			['⋮','⋮'],
			[199,'【割尾法2】a*(199+1-100)+(2-1)b → a+2b'],
			[211,'【割尾法2】*2 = a*(211-11)+b*2 → 11a-2b'],
			[223,'【割尾法2】*2 = a*(223-23)+b*2 → 23a-2b'],
			['⋮','⋮'],
			[983,'【割尾法2】a*(983+17-9*100)+(10-9)b → 17a+10b'],
			[991,'【割尾法2】a*(991+9-9*100)+(10-9)b → 9a+10b'],
			[997,'【割尾法2】a*(997+3-9*100)+(10-9)b → 3a+10b'],
			[[scit('st'),'其中(s,t)=1','t是两位数'].join(br),['【割尾法2】*s = a*('+scit('st')+'-t)+b*s → ta-sb',
					'特别地, s=1时，'+scit('1t')+' → ta-b',
					'特别地, t=01时，'+scit('s01')+' → a-sb',
					'特别地, t=03时，'+scit('s03')+' → 3a-sb',
					'特别地, t=07时，'+scit('s07')+' → 7a-sb',
					'特别地, t=09时，'+scit('s09')+' → 9a-sb',
						
					'特别地, t>50时，ta-sb → (100-t)a+(s+1)b',
					Table([['t','判别式','s（只列出s是个位数的情况）']],[['01','a-sb','1,4,6,7'],['03','3a-sb','1,5'],['07','7a-sb','1,3,6,9'],['09','9a-sb','1,4,5,7,8'],
						['11','11a-sb','2,3,8,9'],['13','13a-sb','1,3,6'],['17','17a-sb','3,6'],['19','19a-sb','4,6,7,9'],
						['21','21a-sb','4,5,8'],['23','23a-sb','2,5,8'],['27','27a-sb','1,2,7,8'],['29','29a-sb','2,8,9'],
						['31','31a-sb','1,3,4,6'],['33','33a-sb','2,4,7'],['37','37a-sb','1,3,9'],['39','39a-sb','1,2,4,7,8'],
						['41','41a-sb','2,5,6,9'],['43','43a-sb','4,6,7'],['47','47a-sb','3,5,6,9'],['49','49a-sb','1,3,4'],
						['51','49a+(s+1)b','1,2,7'],['53','47a+(s+1)b','3,6,8,9'],['57','43a+(s+1)b','1,2,4,5,7,8'],['59','41a+(s+1)b','3,6,8'],
						['61','39a+(s+1)b','4,6,7'],['63','37a+(s+1)b','1,2,4,5,8'],['67','33a+(s+1)b','1,3,4,9'],['69','31a+(s+1)b','2,5,7'],
						['71','29a+(s+1)b','2,5,9'],['73','27a+(s+1)b','1,3,6,7'],['77','23a+(s+1)b','2,5,6,8,9'],['79','21a+(s+1)b','1,3,4'],
						['81','19a+(s+1)b','1,2,8'],['83','17a+(s+1)b','2,3,6,8,9'],['87','13a+(s+1)b','4,5,7,8'],['89','11a+(s+1)b','3'],
						['91','9a+(s+1)b','1,4,6,9'],['93','7a+(s+1)b','1,2,5'],['97','3a+(s+1)b','1,3,7,9'],['99','a+(s+1)b','1,4,5'],
						],'TBrc')
					].join(br)],
			],'TBrc wiki')
		
		);
	
