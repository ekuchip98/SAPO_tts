package com.sapo.edu.config;
import com.sapo.edu.constant.SystemConstant;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
@EnableRabbit
public class RabbitMQConfig {

    @Bean
    public Declarables topicBindings(){
        Queue topicQueue1 = new Queue(SystemConstant.TOPIC_QUEUE_1_NAME, false);
        Queue topicQueue2 = new Queue(SystemConstant.TOPIC_QUEUE_2_NAME, false);

        TopicExchange topicExchange = new TopicExchange(SystemConstant.TOPIC_EXCHANGE_NAME);
        return new Declarables(
                topicQueue1,
                topicQueue2,
                topicExchange,
                BindingBuilder.bind(topicQueue1).to(topicExchange).with("*.important*"),
                BindingBuilder.bind(topicQueue2).to(topicExchange).with("#.error")
        );
    }

    @Bean
    public Declarables  fanoutBindings(){
        Queue fanoutQueue1 = new Queue(SystemConstant.FANOUT_QUEUE_1_NAME, false);
        Queue fanoutQueue2 = new Queue(SystemConstant.FANOUT_QUEUE_2_NAME, false);

        FanoutExchange fanoutExchange = new FanoutExchange(SystemConstant.FANOUT_EXCHANGE_NAME);
        return new Declarables (
                fanoutQueue1,
                fanoutQueue2,
                fanoutExchange,
                BindingBuilder.bind(fanoutQueue1).to(fanoutExchange),
                BindingBuilder.bind(fanoutQueue2).to(fanoutExchange)
        );
    }

    @Bean
    public Declarables headerBindings() {
        Queue headerQueue = new Queue(SystemConstant.HEADERS_QUEUE_NAME, false);
        HeadersExchange headersExchange = new HeadersExchange(SystemConstant.HEADERS_EXCHANGE_NAME);
        return new Declarables(
                headerQueue,
                headersExchange,
                BindingBuilder.bind(headerQueue).to(headersExchange).where("level").matches("error")
        );
    }

    @Bean
    public Declarables directBingdings() {
        Queue directQueue1 = new Queue(SystemConstant.TOPIC_QUEUE_1_NAME, false);
        Queue directQueue2 = new Queue(SystemConstant.TOPIC_QUEUE_2_NAME, false);
        DirectExchange directExchange = new DirectExchange(SystemConstant.DIRECT_EXCHANGE_NAME);
        return new Declarables(
                directExchange,
                BindingBuilder.bind(directQueue1).to(directExchange).with("direct.exchange-1"),
                BindingBuilder.bind(directQueue2).to(directExchange).with("direct.exchange-2")
        );
    }

    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }



}
