export default function searchArticleByURL(url, page) {
	for (let pari in page.paragraphs) {
		var par = page.paragraphs[pari];
		for (let arti in par.articles) {
			var art = par.articles[arti];
				
			if (url === art.url || url === art.url_trans) {
				return art;
			}
		}
	}
 	return null;
}
	
	
