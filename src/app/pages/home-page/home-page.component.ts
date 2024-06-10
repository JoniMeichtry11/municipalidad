import { Component } from '@angular/core';
import { WelcomeComponent } from '../../components';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [WelcomeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  servicesCards = [
    {
      icon: 'icon-[material-symbols--fingerprint]',
      title: 'Registro Civil'
    },
    {
      icon: 'icon-[streamline--steering-wheel-solid]',
      title: 'Mi licencia digital'
    },
    {
      icon: 'icon-[uil--file-contract-dollar]',
      title: 'Portal Tributario'
    },
    {
      icon: 'icon-[mdi--excavator]',
      title: 'Obras Privadas'
    },
    {
      icon: 'icon-[healthicons--nutrition-outline]',
      title: 'Calidad Alimentaria'
    },
    {
      icon: 'icon-[bi--bus-front-fill]',
      title: 'Tu Bondi'
    },
    {
      icon: 'icon-[material-symbols--business-center]',
      title: 'Habilitación de Negocios On Line'
    },
    {
      icon: 'icon-[material-symbols--stream-apps-outline-rounded]',
      title: 'App Ciudadana'
    },
    {
      icon: 'icon-[solar--health-linear]',
      title: 'Salud'
    },
    {
      icon: 'icon-[material-symbols--calendar-month-rounded]',
      title: 'Turnero Online'
    },
  ]
  ciudadCards = [
    {
      icon: 'icon-[carbon--user-service-desk]',
      title: 'Ciudad de servicios',
    },
    {
      icon: 'icon-[icon-park-outline--international]',
      title: 'Ciudad cultural',
    },
    {
      icon: 'icon-[iconoir--group]',
      title: 'Ciudad inclusiva',
    },
    {
      icon: 'icon-[carbon--growth]',
      title: 'Ciudad de oportunidades',
    },
    {
      icon: 'icon-[streamline--natrue-ecology-recycle-1-sign-environment-protect-save-arrows]',
      title: 'Ciudad amiga del ambiente',
    },
    {
      icon: 'icon-[carbon--ibm-engineering-workflow-mgmt]',
      title: 'Ciudad Govtech',
    },
  ]
  telefonosUtiles = [
    {
      number: '103',
      label: 'Defensa Civil'
    },
    {
      number: '144',
      label: 'Violencia contra la mujer'
    },
    {
      number: '107',
      label: 'Emergencia Médica'
    },
    {
      number: '108',
      label: 'Primer contacto'
    },
    {
      number: '142',
      label: 'Niños extraviados'
    },
    {
      number: '145',
      label: 'Trata de personas'
    },
  ]
}
