#pragma strict

var prefabDirt1 : Transform;
var prefabDirt2 : Transform;
var prefabDirt3 : Transform;

var life : int;

private var offset : float = 3.5;

function Start () {
	var x = 0;
	var y = 0;
	for (var i = 0; i < 36; i++) {
		if (i % 6 == 0){
			y -= 1;
			x = 0;
		}
		x += 1;

		var dirt : Transform;
		var rnd = Random.Range(1, 14);
		if (rnd <= 11)
			dirt = Instantiate(prefabDirt1, transform.position+Vector3(x-offset, y+offset, 0), Quaternion.identity);
		if (rnd == 12)
			dirt = Instantiate(prefabDirt2, transform.position+Vector3(x-offset, y+offset, 0), Quaternion.identity);
		if (rnd == 13)
			dirt = Instantiate(prefabDirt3, transform.position+Vector3(x-offset, y+offset, 0), Quaternion.identity);
		dirt.parent = transform;
	}

}

function Update () {
	if (life <= 0)
		Destroy(gameObject);

}

function KillChild() {
	var i = Random.Range(0, transform.childCount);
	if (i > 0)
		Destroy(transform.GetChild(i).gameObject);
}

