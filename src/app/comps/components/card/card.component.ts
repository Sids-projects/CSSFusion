import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  colours: string[] = ['yellow', 'green', 'orange', 'blue', 'violet', 'gray'];

  coloursData: any[] = [
    {
      colour: 'yellow',
      title: 'Basic Plan',
      tagline: 'Ideal for individuals',
      features:
        'Access basic features, 5GB storage, and email support for individuals.',
    },
    {
      colour: 'green',
      title: 'Pro Plan',
      tagline: 'Perfect for professionals',
      features:
        'Advanced features, 50GB storage, and priority support for professionals.',
    },
    {
      colour: 'orange',
      title: 'Standard Plan',
      tagline: 'Great for small teams',
      features:
        'Collaborate with a small team with 100GB storage and team tools.',
    },
    {
      colour: 'blue',
      title: 'Premium Plan',
      tagline: 'For growing businesses',
      features:
        'Enjoy all premium features, unlimited storage, and 24/7 support.',
    },
    {
      colour: 'violet',
      title: 'Business Plan',
      tagline: 'Tailored for enterprises',
      features:
        'Scalable solutions for enterprises with customized features and VIP support.',
    },
    {
      colour: 'gray',
      title: 'Enterprise Plan',
      tagline: 'For large-scale solutions',
      features:
        'Tailored for large organizations with multi-level management tools.',
    },
  ];
}
