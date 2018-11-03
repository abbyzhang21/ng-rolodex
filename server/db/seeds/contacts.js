
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        { name: 'Bobina Dilawey', link: 'https://robohash.org/animifugitnobis.png?size=20x20&set=set1	', address: '664 Purple Finch Court Olney, MD 20832', mobile: '(752) 9436657	', email: 'ktetsalli@chicagotribune.com	', instagram: 'losherrin13' },
        { name: 'Phaidra Jakov', link: 'https://robohash.org/idoccaecativeritatis.bmp?size=50x50&set=set1', address: '74 Inverness Dr. Deerfield Beach, FL 33442', mobile: '(525) 4644702	', email: 'tsorroj@samsung.com	', instagram: 'dhardwidge14' },
        { name: 'Moira Saterthwait	', link: 'https://robohash.org/facilisutaut.png?size=50x50&set=set1', address: '77 Lincoln Ave. Leland, NC 28451', mobile: '(596) 6276597	', email: 'gcasonem@baidu.com	', instagram: 'reicheler15' },
        { name: 'Dwain Vasiliu	', link: 'https://robohash.org/estconsequaturmaiores.bmp?size=50x50&set=set1', address: '9961 Plymouth Avenue Norwood, MA 02062', mobile: '(748) 6619132	', email: 'ecockshutn@imageshack.us	', instagram: 'ioglessane16' },
        { name: 'Dwain Vasiliu	', link: 'https://robohash.org/estconsequaturmaiores.bmp?size=50x50&set=set1', address: '9961 Plymouth Avenue Norwood, MA 02062', mobile: '(748) 6619132	', email: 'jwahlbergo@ebay.com	', instagram: 'kdionis17' },
        { name: 'Dwain Vasiliu	', link: 'https://robohash.org/estconsequaturmaiores.bmp?size=50x50&set=set1', address: '9961 Plymouth Avenue Norwood, MA 02062', mobile: '(748) 6619132	', email: 'chateleyp@newsvine.com	', instagram: 'mo18' },
        { name: 'Waylin Jozefiak	', link: 'https://robohash.org/dolorumutrepudiandae.png?size=50x50&set=set1', address: '7391 Lake Forest Ave. Baltimore, MD 21206', mobile: '(687) 5194454	', email: 'hbrandliq@histats.com	', instagram: 'jaberkirder1' },
        { name: 'Lonnie Trematick	', link: 'https://robohash.org/quivoluptatemdoloremque.jpg?size=50x50&set=set1', address: '583 Sheffield Ave. Branford, CT 06405', mobile: '(794) 2139102	', email: 'jjanosevict@surveymonkey.com	', instagram: 'lmuffin1a' },
        { name: 'Abigael Tatersale	', link: 'https://robohash.org/ipsamadmagni.jpg?size=50x50&set=set1	', address: '4754 Red Cloud Alley', mobile: '(506) 2585098	', email: 'eeddiesx@columbia.edu	', instagram: 'dcdv12' },
        { name: 'Alicea Lathom	', link: 'https://robohash.org/doloremsitoptio.png?size=50x50&set=set1	', address: '28 Marcy Pass', mobile: '(462) 3520362	', email: 'dmacgibbony@wix.com	', instagram: 'jink323' },
        { name: 'Romeo lani', link: 'https://robohash.org/rerumsapienteaut.png?size=50x50&set=set1	', address: '966 Hanover Pass', mobile: '(382) 3576696	', email: 'tcathcartz@sciencedirect.com	', instagram: 'dkjd12' },
        { name: 'Inness Capineer	', link: 'https://robohash.org/aliasquiaqui.png?size=50x50&set=set1	', address: '887 Homewood Avenue	', mobile: '(473) 5931674	', email: 'dwinram10@surveymonkey.com	', instagram: 'zhane00' },
        { name: 'Titcombe', link: 'https://robohash.org/necessitatibusnihileaque.png?size=50x50&set=set1	', address: '4219 Dayton Street	', mobile: '(415) 5305465	', email: 'onelson11@yandex.ru	', instagram: 'time009' },
        { name: 'Moss Harnetty', link: 'https://robohash.org/ullamdebitisinventore.bmp?size=50x50&set=set1', address: '2024 Continental Avenue	', mobile: '(772) 5519125	', email: 'krazoux12@1und1.de	', instagram: 'drnerti09' },
        { name: 'Moss Harnetty', link: 'https://robohash.org/ullamdebitisinventore.bmp?size=50x50&set=set1', address: '2024 Continental Avenue	', mobile: '(868) 3439816	', email: 'losherrin13@dmoz.org	', instagram: 'ttitle009' },
        { name: 'Moss Harnetty', link: 'https://robohash.org/ullamdebitisinventore.bmp?size=50x50&set=set1', address: '2024 Continental Avenue	', mobile: '(868) 3439816	', email: 'dhardwidge14@cbc.ca	', instagram: 'iboeoe90' },
        { name: 'Ara Balleine	', link: 'https://robohash.org/cumqueminimanesciunt.png?size=50x50&set=set1', address: '76 Lillian Alley	', mobile: '(621) 2285385	', email: 'reicheler15@yolasite.com	', instagram: 'nep12' },
        { name: 'Ara Balleine	', link: 'https://robohash.org/cumqueminimanesciunt.png?size=50x50&set=set1', address: '76 Lillian Alley	', mobile: '(621) 2285385	', email: 'ioglessane16@samsung.com	', instagram: 'pier1' },
        { name: 'Rafaello Sleney	', link: 'https://robohash.org/repudiandaesapientereiciendis.png?size=50x50&set=set1', address: '013 Little Fleur Point	', mobile: '(621) 2285385', email: 'kdionis17@google.cn	', instagram: 'otrl92' },
        { name: 'Kerwinn Rodolf	', link: 'https://robohash.org/hictemporaanimi.png?size=50x50&set=set1', address: '87 Acker Circle', mobile: '(957) 3019208	', email: 'arcjer@gmail.com', instagram: 'ok1234' },
        { name: 'Robina MacElane	', link: 'https://robohash.org/omnisadmagnam.jpg?size=50x50&set=set1', address: '5356 Charing Cross Plaza	', mobile: '(971) 2831336	', email: 'lmuffin1a@google.com.au	', instagram: 'tina123' },
        { name: 'Juliette Benz	', link: 'https://robohash.org/voluptatesquisquamaut.png?size=50x50&set=set1', address: '39247 Holy Cross Plaza	', mobile: '(389) 2031672	', email: 'djowle1b@addthis.com	', instagram: 'jellp898' },
        { name: 'Torre Kilrow	', link: 'https://robohash.org/essequout.bmp?size=50x50&set=set1	', address: '99 Ludington Court	', mobile: '(357) 2488913	', email: 'gsproat1c@gnu.org	', instagram: 'hene34' },
        { name: 'Storm Botton	', link: 'https://robohash.org/debitisexercitationemrepudiandae.bmp?size=50x50&set=set1	', address: '6904 Dwight Road	', mobile: '(963) 4616288	', email: 'ycaldera1d@woothemes.com	', instagram: 'tien21332' },
        { name: 'Valentia Hooban	', link: 'https://robohash.org/quiaaccusamusvoluptas.jpg?size=50x50&set=set1	', address: '5 Northland Circle	', mobile: '(634) 6877797	', email: 'mo18@g.co	', instagram: 'hehe33' },
        { name: 'Tallie Douche	', link: 'https://robohash.org/velametratione.jpg?size=50x50&set=set1	', address: '6 Express Terrace	', mobile: '(908) 5906992	', email: 'kdionis17@google.cn	', instagram: 'aefdf123' },
        { name: 'Patten Bedrosian	', link: 'https://robohash.org/veritatisvelitaut.jpg?size=50x50&set=set1	', address: '107 Westport Road	', mobile: '(771) 5058594	', email: 'ioglessane16@samsung.com	', instagram: '3fdfd3' },


      ]);
    });
};
