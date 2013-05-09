#pragma strict

var redTorch : GameObject;
var blueTorch : GameObject;
var axe : GameObject;

var force : float;
var maxVelocity : float;

function Update () {
    var mouseRay = Camera.main.ScreenPointToRay(Input.mousePosition).origin;

    var angle = Mathf.Atan2(mouseRay.y - transform.position.y, mouseRay.x - transform.position.x) * Mathf.Rad2Deg;
	transform.eulerAngles = Vector3(0, 0, angle);

    if (Input.GetButton("Fire2")) {
    	redTorch.SetActive(true);

        mouseRay -= transform.position;
        mouseRay.z = 0;
    	mouseRay = mouseRay.normalized;

        var player = transform.parent.gameObject;
    	player.rigidbody.AddForce(mouseRay.x * Time.deltaTime * force/1.5, mouseRay.y * Time.deltaTime * force, 0);
        if (player.rigidbody.velocity.y > maxVelocity)
            player.rigidbody.velocity.y = maxVelocity;
        if (player.rigidbody.velocity.x > maxVelocity)
            player.rigidbody.velocity.x = maxVelocity;
        if (player.rigidbody.velocity.x < -maxVelocity)
            player.rigidbody.velocity.x = -maxVelocity;
	} else {
    	redTorch.SetActive(false);
	}

    if (Input.GetButtonDown("Fire1")) {
        blueTorch.SetActive(true);
        axe.collider.enabled = true;
    }
    if (Input.GetButtonUp("Fire1")) {
        blueTorch.SetActive(false);
        axe.collider.enabled = false;
    }
}