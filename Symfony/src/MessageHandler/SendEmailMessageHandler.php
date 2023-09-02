<?php

namespace App\MessageHandler;

use App\Message\SendEmailMessage;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

final class SendEmailMessageHandler implements MessageHandlerInterface
{
    public function __invoke(SendEmailMessage $message)
    {
        // $email = (new Email())
        //     ->from($message->getFrom())
        //     ->to($message->getTo())
        //     ->subject($message->getSubject())
        //     ->text($message->getMessage());
        // 
        // $mailer->send($email);

    }
}
