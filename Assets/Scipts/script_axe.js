#pragma strict

function OnTriggerStay (other : Collider) {
    other.gameObject.GetComponent(script_dirt).life -= 1;
    other.gameObject.GetComponent(script_dirt).KillChild();
}