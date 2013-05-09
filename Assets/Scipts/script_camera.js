#pragma strict

var target : Transform;

function Update () {
	transform.position = Vector3(target.position.x, target.position.y, transform.position.z);

	var wheel = Input.GetAxis("Mouse ScrollWheel");
	if (wheel > 0 && gameObject.camera.orthographicSize > 20)
		gameObject.camera.orthographicSize -= 10;
	if (wheel < 0 && gameObject.camera.orthographicSize < 100)
		gameObject.camera.orthographicSize += 10;
}