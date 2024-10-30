
function completeTask(task) {
	task.classList.toggle("completed");
}

async function deleteTask(li) {
	li.parentNode.style.transform = "perspective(13cm) rotateY(630deg)";
	await deleteAnimation(li);
}

function deleteAnimation(li) {
	return (new Promise((resolve) => {
		setTimeout(() => {
			li.parentNode.remove();
		}, 2200);
	}))
	
}