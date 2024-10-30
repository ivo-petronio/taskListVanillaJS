
function completeTask(task) {
	task.classList.toggle("completed");
}

async function deleteTask(task) {
	await doDelete(li);
	task.parentNode.remove();
}

function doDelete(li) {
	setInterval(() => {
		li.style.transform = "perspective(10cm) rotateY(630deg)";
	}, 2200);
}
