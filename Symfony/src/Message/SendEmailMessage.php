<?php

namespace App\Message;

final class SendEmailMessage
{
    private string $from;
    private string $to;
    private string $subject;
    private string $message;

    public function __construct(
        string $from,
        string $to,
        string $subject,
        string $message
    ) {
        $this->from = $from;
        $this->to = $to;
        $this->subject = $subject;
        $this->message = $message;
    }

    public function getFrom(): string
    {
        return $this->from;
    }

    public function getTo(): string
    {
        return $this->to;
    }

    public function getSubject(): string
    {
        return $this->subject;
    }

    public function getmessage(): string
    {
        return $this->message;
    }
}