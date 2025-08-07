function fetchDataWithCallback(callback) {
  setTimeout(function () {
    try {
      // Simulate success or failure
      const isSuccess = Math.random() > 0.3; // 70% success rate

      if (!isSuccess) {
        throw new Error("Fetch failed");
      }

      // If successful, call the callback with the message
      callback("Data fetched");
    } catch (error) {
      console.log(error.message); // Log: "Fetch failed"
    }
  }, 2000);
}

// Example usage:
fetchDataWithCallback(function (result) {
  console.log(result); // Logs "Data fetched" on success
});
