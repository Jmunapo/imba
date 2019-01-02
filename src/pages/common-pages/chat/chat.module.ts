import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { ChatServiceProvider } from "../../../providers/chat-service/chat-service";
import { RelativeTimePipe } from "../../../pipes/relative-time/relative-time";
import { EmojiPickerComponentModule } from "../../../components/emoji-picker/emoji-picker.module";
import { EmojiProvider } from "../../../providers/emoji/emoji";

@NgModule({
  declarations: [
    ChatPage,
    RelativeTimePipe
  ],
  imports: [
    EmojiPickerComponentModule,
    IonicPageModule.forChild(ChatPage),
  ],
  exports: [
    ChatPage
  ],
  providers: [
    ChatServiceProvider,
    EmojiProvider
  ]
})
export class ChatModule {
}
