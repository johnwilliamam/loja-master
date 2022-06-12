const express = require('express');
const app = express();


app.get("/", 
function itens(req, res){
    const items = [{"_id":"62699335927bf80017a8e1d3","id":1,"title":"Porta Laptop","price":109.99,"description":"Sua mochila perfeita para o uso diário e passeios na floresta. Guarde seu laptop (até 15 polegadas) na manga acolchoada, seu diário","category":"Roupas masculinas","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"_id":"626993de927bf80017a8e1d4","id":2,"title":"Camiseta Joss Corte a Fio Lisa Cinza","price":33,"description":"A Camiseta da Joss Corte a Fio Lisa é extremamente confortável e fácil de usar. É feita à mão com a mais recente tecnologia e 100% puro algodão egípcio, que garante leveza, maciez e durabilidade para vida toda.","category":"Roupas masculinas","image":"https://shopjoss.vteximg.com.br/arquivos/ids/184102-1104-1600/Camiseta-Joss-Corte-a-Fio-Lisa-Cinza-Cor-Cinza-Tamanho-P-Genero-Masculino_0.png?v=637801036318800000","rating":{"rate":5,"count":120}},{"_id":"62699551927bf80017a8e1d6","id":3,"title":"Camiseta listrada","price":199.9,"description":"A Camiseta da Joss Corte a Fio Lisa é extremamente confortável e fácil de usar. É feita à mão com a mais recente tecnologia e 100% puro algodão egípcio, que garante leveza, maciez e durabilidade para vida toda.","category":"Roupas masculinas","image":"https://img.ltwebstatic.com/images3_pi/2021/03/30/1617085484c486141786c04a13220303f5bba08221.webp","rating":{"rate":5,"count":120}},{"_id":"62699600927bf80017a8e1d8","id":4,"title":"Camiseta EUA","price":1.99,"description":"feita à mão com a mais recente tecnologia e 100% puro algodão egípcio, que garante leveza, maciez e durabilidade para vida toda.","category":"Roupas masculinas","image":"https://img.elo7.com.br/product/zoom/1168DCD/camiseta-band-estados-unidos-masculina-estados-unidos-da-america.jpg","rating":{"rate":5,"count":120}},{"_id":"62699633927bf80017a8e1d9","id":5,"title":"Camisa Masculina Marrom Manga Longa Tuff","price":99,"description":"Camisa masculina Tuff original fabricada em tecido 100% Algodão na cor Marrom, possui manga longas, bolso no peito com bordado da marca e botões personalizados.","category":"Roupas masculinas","image":"https://rodeowest.fbitsstatic.net/img/p/camisa-masculina-marrom-manga-longa-tuff-27461-162140/398911.jpg?w=460&h=460&v=no-change&qs=ignore","rating":{"rate":5,"count":120}},{"_id":"6269969c927bf80017a8e1da","id":6,"title":"CAMISETA MASCULINA TORNETRÄSK GREEN","price":60,"description":"A Camiseta Masculina Torneträsk possui o logo da Fjällräven impresso no peito e é estampada com uma foto do lago Torneträsk, um lindo lago sueco localizado no extremo norte da trilha Kungsleden , nas costas","category":"Roupas masculinas","image":"https://fjallraven.vteximg.com.br/arquivos/ids/156206-751-936/F87314620_Camiseta_Masculina_Tornetrask_T-shirt_M_front_1.png?v=637231761314600000","rating":{"rate":5,"count":120}},{"_id":"62699715927bf80017a8e1db","id":7,"title":"Camiseta Preta Masculina Basica Algodão Premium 100%","price":30,"description":"camiseta preta basica feita de algodão","category":"Roupas masculinas","image":"https://img.elo7.com.br/product/original/36F76BB/camiseta-masculina-basica-nelville-streetwear-algodao-100.jpg","rating":{"rate":5,"count":120}},{"_id":"6269ad43927bf80017a8e1e0","id":7,"title":"Gravata Listrada Com Nó Pronto e Zíper","price":14,"description":"Gravata adulto listrada, com nó pronto e zíper, composta por 100% poliéster.","category":"Roupas masculinas","image":"https://www.samys.com.br/image/cache/catalog/produtos/016528_cinzagratite_F-800x800.jpg","rating":{"rate":5,"count":120}},{"_id":"6269ae03927bf80017a8e1e1","id":9,"title":"Gravata Slim Premium Rosa Bebê / Rosa Claro","price":14,"description":"Gravata adulto rosa claro, com nó pronto e zíper, composta por 100% poliéster.","category":"Roupas masculinas","image":"https://a-static.mlcdn.com.br/618x463/gravata-slim-premium-rosa-bebe-rosa-claro-gravatas-do-brasil/gravatasdobrasil/7840960960/3539d7fc966932e5875aa9865b78169d.jpg","rating":{"rate":5,"count":120}},{"_id":"6269ae2b927bf80017a8e1e2","id":10,"title":"Gravata Preta Lisa Slim Fit Qualidade Premium","price":14,"description":"Gravata adulto preta, com nó pronto e zíper, composta por 100% poliéster.","category":"Roupas masculinas","image":"https://a-static.mlcdn.com.br/618x463/gravata-preta-lisa-slim-fit-qualidade-premium-gravatas-do-brasil/gravatasdobrasil/7802985954/3eede4cbb9b4653f0ea11376b0fa7e66.jpg","rating":{"rate":5,"count":120}},{"_id":"6269aea4927bf80017a8e1e3","id":10,"title":"Simples ocasional Camiseta","price":50,"description":"blusa cropped vermelho escuro","image":"https://img.ltwebstatic.com/images3_pi/2020/09/24/16009157263123b2b02d563cda90bf88d27a06a61e_thumbnail_600x.webp","rating":{"rate":5,"count":120}},{"_id":"6269af39927bf80017a8e1e4","id":12,"title":"Vestido Simples","price":70,"description":"Vestido preto simples com manga","image":"https://img.ltwebstatic.com/images3_pi/2021/05/21/16215626666dd0dbc568090caacb1721793afb5b3a_thumbnail_600x.webp","rating":{"rate":5,"count":120}},{"_id":"6269afb3927bf80017a8e1e5","id":13,"title":"Vestido Vermelho Xadrez","price":70,"description":"Vestido Vermelho xadrez curto","category":"Roupas femininas","image":"https://img.ltwebstatic.com/images2_pi/2019/09/09/15680162993450395920_thumbnail_600x799.webp","rating":{"rate":5,"count":120}},{"_id":"6269b067927bf80017a8e1e6","id":14,"title":"Tenis AllStar","price":199,"description":"Tenis allStar preto com detalhes brancos, otima qualidade","category":"Acessórios","image":"https://img.ltwebstatic.com/images3_pi/2021/05/11/16207191198562e8524e6e9a0d7acf2245df7ec0f4_thumbnail_600x.webp","rating":{"rate":5,"count":120}},{"_id":"6269b0c2927bf80017a8e1e7","id":15,"title":"Óculos de sol irregulares acrílicos do quadro","price":30,"description":"Óculos de sol irregulares acrílicos do quadro","category":"Acessórios","image":"https://img.ltwebstatic.com/images3_pi/2022/04/08/1649396160c03115048e9b472923ad46cde1e86353_thumbnail_600x.webp","rating":{"rate":5,"count":120}},{"_id":"626a207881fbdc0017abdf5d","id":16,"title":"Jaqueta sintética regular manga longa da poliuretana alcochoada","price":300,"description":"Jaqueta sintética regular manga longa da poliuretana alcochoada","category":"Roupas femininas","image":"https://img-br.urbanic.com/goods-pic/86faeef2b91c42a18f083742fff83729_w1176_q95","rating":{"rate":5,"count":120}},{"_id":"626a20c181fbdc0017abdf5e","id":17,"title":"Macacão comprido","price":60,"description":"Macacão comprido comprimento do tornozelo sem manga de algodão simples","category":"Roupas femininas","image":"https://img-br.urbanic.com/goods-pic/c8fa3b0eb4e94f2cbf6eeff1e557d24e_w1176_q95","rating":{"rate":5,"count":120}},{"_id":"626a20f181fbdc0017abdf5f","id":18,"title":"Conjunto feminino","price":90,"description":"Conjunto de duas peças de algodão lace up 2 peças","category":"Roupas femininas","image":"https://img-br.urbanic.com/goods-pic/19b73953e5f14597903c5c30ad326098_w1176_q95","rating":{"rate":5,"count":120}},{"_id":"626a212481fbdc0017abdf60","id":19,"title":"jeans regulars feminino","price":301,"description":"Mom jeans regulars de algodão rasgados","category":"Roupas femininas","image":"https://img-br.urbanic.com/goods-pic/8ecf276cd6c44ed99ef97ce2c66df541_w1176_q95","rating":{"rate":5,"count":120}},{"_id":"626a217581fbdc0017abdf61","id":20,"title":"Blusa de placket/carcela Verde neon","price":70,"description":"Blusa de placket/carcela alongada manga longa de poliéster nó","category":"Roupas femininas","image":"https://img-br.urbanic.com/goods-pic/1a9a54423b6e493b91d13ffacf9077be_w1176_q95","rating":{"rate":5,"count":120}},{"_id":"626a21af81fbdc0017abdf62","id":20,"title":"Bijoux - colar chocke","price":35,"description":"Bijoux - colar chocke/coleira da liga pérola","category":"Joias","image":"https://img-br.urbanic.com/goods-pic/6a655a7f9fe24267831f267bc93aed9b_w1176_q95","rating":{"rate":5,"count":120}},{"_id":"626a21e681fbdc0017abdf63","id":21,"title":"Bijoux - brinco de metal geométricoe","price":19,"description":"Bijoux - brinco de metal geométrico","category":"Joias","image":"https://img-br.urbanic.com/goods-pic/952dce448036437bb199e9a39c279d7f_w1176_q95","rating":{"rate":5,"count":120}}]
    res.json(items)
})


app.listen(7000, ()=>{
    console.log('listening on port 3000')
})