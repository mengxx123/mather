/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Polynomial/Identity']=Kx(
detail('多项式恒等式（因式分解公式）',Table([ZLR('名称 记法 结果 性质')],[
	

	['2次多项式','x^2+(a+b)x+ab','(x+a)(x+b)'],
	['2次多项式','cdx^2+(ad+bc)x+ab','(cx+a)(dx+b)'],
    ['完全平方',khrA(['a^2+2ab+b^2','a^2-2ab+b^2']),khrA(['(a+b)^2','(a-b)^2'])],
	['平方差','a^2-b^2','(a+b)(a-b)'],
	['完全立方',khrA(['a^3+3a^2b+3ab^2+b^3','a^3+3ab(a+b)+b^3']),khrA(['(a+b)^3'])],
    ['完全立方',khrA(['a^3-3a^2b+3ab^2-b^3','a^3-3ab(a-b)-b^3']),khrA(['(a-b)^3'])],
    ['立方和','a^3+b^3','(a+b)(a^2-ab+b^2)'],
    ['立方差','a^3-b^3','(a-b)(a^2+ab+b^2)'],
	['奇数方和','a^n+b^n','(a+b)\\\\(a^{n-1}-a^{n-2}b+a^{n-3}b^2-⋯-ab^{n-2}+b^{n-1})'],
	['奇数方差','a^n-b^n','(a-b)\\\\(a^{n-1}+a^{n-2}b+a^{n-3}b^2+⋯+ab^{n-2}+b^{n-1})'],
	[kxA(['偶数方差','n=2^kd','d是奇数']),'a^n-b^n',khrA(['(a+b)(a-b)\\\\(a^{n-2}+a^{n-4}b^2+a^{n-6}b^4+⋯+a^2b^{n-4}+b^{n-2})',
        kxA(['(a+b)(a-b)',
        '(a^{d-1}-a^{d-2}b+a^{d-3}b^2-⋯-ab^{d-2}+b^{d-1})',
		'(a^{d-1}+a^{d-2}b+a^{d-3}b^2+⋯+ab^{d-2}+b^{d-1})',
		'(a^{2d}+b^{2d})(a^{4d}+b^{4d})⋯(a^{2^{k-1}d}+b^{2^{k-1}d})'])
		])
		],
	[kxA(['偶齐次项和','n=2^kd-2','k>1','d是奇数']),'a^n+a^{n-2}b^2+a^{n-4}b^4\\\\+⋯+a^2b^{n-2}+b^n',
		kxA(['(a^{d-1}-a^{d-2}b+a^{d-3}b^2-⋯-ab^{d-2}+b^{d-1})',
			'(a^{d-1}+a^{d-2}b+a^{d-3}b^2+⋯+ab^{d-2}+b^{d-1})',
			'(a^{2d}+b^{2d})(a^{4d}+b^{4d})⋯(a^{2^{k-1}d}+b^{2^{k-1}d})'
		])
		],
	['4次齐次项和','a^4+a^2b^2+b^4',
		'(a^2+ab+b^2)(a^2-ab+b^2)'
        ],
    ['2次齐次项和','a^2+ab+b^2',
		'(a+b+\\sqrt{ab})(a+b-\\sqrt{ab})'
		],
	['3项和平方','a^2+b^2+c^2\\\\+2(ab+ac+bc)',
		'(a+b+c)^2'
		],
	['3项和立方',kxA(['a^3+b^3+c^3+','3(a^2b+a^2c','+b^2a+b^2c','+c^2a+c^2b)','+6abc']),
		'(a+b+c)^3'
		],
	['n项和平方',sum('i',1,'n','a_i^2','','')+'+2'+sum('','i≤j','','a_ia_j','',''),
		lrp('',sum('i',1,'n','a_i','',''),'','')+'^2'
		],
	['欧拉恒等式\nEuler identity',khrA(['(aw+bx+cy+dz)^2\\\\+(bw-ax+dy-cz)^2\\\\+(cw-dx-ay+bz)^2\\\\+(dw+cx-by-az)^2',
		'(aw+bx+cy+dz)^2\\\\+(-ax+bw-cz+dy)^2\\\\+(-ay+bz+cw-dx)^2\\\\+(-az-by+cx+dw)^2']),
		khrA(['(a^2+b^2+c^2+d^2)(w^2+x^2+y^2+z^2)','看看是否可以写成矩阵形式来证明'])
		],
	

],'wiki').replace(/\n/g,br))
);