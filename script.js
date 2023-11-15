
    sendNotification =()=> {
        // Get values from the form
        const selectedUser = document.getElementById('user').value;
        const notificationTitle = document.getElementById('title').value;
        const notificationContent = document.getElementById('content').value;

        console.log('User:', selectedUser);
        console.log('Title:', notificationTitle);
        console.log('Content:', notificationContent);

         // Clear input fields
         document.getElementById('user').value = ''; // Reset the user selection
         document.getElementById('title').value = ''; // Clear the title input
         document.getElementById('content').value = ''; //clear the content field


    }
