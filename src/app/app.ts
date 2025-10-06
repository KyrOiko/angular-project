import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { ContactForm } from './contact-form/contact-form';
import { MapSection } from './map-section/map-section';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, MatCardModule, MatButtonModule, MatIconModule, ContactForm, MapSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('first-ng-app');
}
