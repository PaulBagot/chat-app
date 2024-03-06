import { supabase } from "@/supabase";
import { ref } from "vue";

export const messages = ref([]);

export const insertMessage = async (content, author_id) => {
   const { error } =  await supabase.from('messages').insert({
        content,
        author_id
    })

    if(error) {
        console.error('error isnerting message', error)
    }
}

export const fetchMessages = async () => {
    const { data, error } = await supabase
        .from('messages')
        .select('*, user:profiles(username, avatar_url)')
        .order('created_at', { ascending : false })
        .limit(100)
    if(error) {
        console.error('error fetching messages', error)
    } else {
        messages.value = data.reverse()
    }
}

export const subscribeToMessage = () => {
    return supabase
    .channel('messages_channel')
    .on('postgres_changes', {event:'*',schema:'public',table:'messages'}, () =>  fetchMessages())
    .subscribe()
}