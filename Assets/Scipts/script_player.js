#pragma strict

var maxVelocity : float;

function Update () {
    if (gameObject.rigidbody.velocity.y < 0.5 && gameObject.rigidbody.velocity.y > -0.5) {
        if (Input.GetKey('d'))
            gameObject.rigidbody.AddForce(30, 0, 0);
        
        if (Input.GetKey('a'))
            gameObject.rigidbody.AddForce(-30, 0, 0);
    }

    if (gameObject.rigidbody.velocity.x > maxVelocity)
        gameObject.rigidbody.velocity.x = maxVelocity;
    if (gameObject.rigidbody.velocity.x < -maxVelocity)
        gameObject.rigidbody.velocity.x = -maxVelocity;

}