const getPathFromChildToParent = (parent, child) => {
    let currentNode = child
    const path = []
    while (currentNode !== parent) {
        const parent = currentNode.parentNode;
        const child = [...parent.children]; // to get the index of the current node. if we use parent.children.indexOf(currentNode) it will not work because parent.children is a HTMLCollection and not an array. so we need to convert it to an array first.
        const arrayPath = child.indexOf(currentNode);
        path.push(arrayPath);
        currentNode = parent;

    }
    return path
}

const getValueFromPath = (parent, path) => {
    let currentNode = parent
    while (path.length) {
        currentNode = currentNode.children[path.pop()] // pop() will remove the last element from the array and return it. so we are getting the last element from the array and using it as the index of the children array. so we are going from the parent to the child.
    }
    return currentNode.innerText
}


const findNodeValue = () => {
    const rootA = document.getElementById('rootA');
    const rootB = document.getElementById('rootB');
    const nodeA = document.getElementById('nodeA');
    const path = getPathFromChildToParent(rootA, nodeA);
    return getValueFromPath(rootB, path)
}

console.log(findNodeValue());
