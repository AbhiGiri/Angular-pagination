import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlYWNofGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the weather',
      url: 'https://images.unsplash.com/photo-1514632595-4944383f2737?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the mountain',
      url: 'https://images.unsplash.com/photo-1602455394505-b4b259a441cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bmF0aW5zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlYWNofGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the weather',
      url: 'https://images.unsplash.com/photo-1514632595-4944383f2737?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the mountain',
      url: 'https://images.unsplash.com/photo-1602455394505-b4b259a441cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bmF0aW5zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlYWNofGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the weather',
      url: 'https://images.unsplash.com/photo-1514632595-4944383f2737?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the mountain',
      url: 'https://images.unsplash.com/photo-1602455394505-b4b259a441cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bmF0aW5zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlYWNofGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the weather',
      url: 'https://images.unsplash.com/photo-1514632595-4944383f2737?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the mountain',
      url: 'https://images.unsplash.com/photo-1602455394505-b4b259a441cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bmF0aW5zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlYWNofGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the weather',
      url: 'https://images.unsplash.com/photo-1514632595-4944383f2737?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the mountain',
      url: 'https://images.unsplash.com/photo-1602455394505-b4b259a441cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bmF0aW5zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
