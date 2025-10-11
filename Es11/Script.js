(async function {
    const { add } = await import("./DynamicInput");
    const { remove } = await import("./DynamicInput");


    add();
    remove();
})();



import("./DynamicInput")
    .then(({ add, remove }) => {
        add();
        remove();
    });









