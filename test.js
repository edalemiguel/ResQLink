
async function query(data) {
    const response = await fetch(
        "https://cloud.flowiseai.com/api/v1/prediction/eeca997d-cff7-49c8-ba49-4f080bf24eea",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});