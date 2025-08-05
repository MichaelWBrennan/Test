import nodemailer from 'nodemailer';
import { config } from '../config';

class NotificationService {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    if (config.notifications.smtpHost) {
      this.transporter = nodemailer.createTransporter({
        host: config.notifications.smtpHost,
        port: config.notifications.smtpPort || 587,
        secure: false,
        auth: config.notifications.smtpUser ? {
          user: config.notifications.smtpUser,
          pass: config.notifications.smtpPass
        } : undefined
      });
    }
  }

  async sendNotification(data: any) {
    console.log('Sending notification:', data);
    // Implementation for various notification types
  }

  async sendEmail(to: string, subject: string, html: string) {
    if (!this.transporter) {
      console.log('Email notification (SMTP not configured):', { to, subject });
      return;
    }

    await this.transporter.sendMail({
      from: config.notifications.fromEmail,
      to,
      subject,
      html
    });
  }

  async sendSlack(webhookUrl: string, message: any) {
    // Implementation for Slack notifications
    console.log('Slack notification:', message);
  }
}

export const notificationService = new NotificationService();